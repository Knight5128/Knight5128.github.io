class Particle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.05 + Math.random() * 0.05;
        this.targetRadius = 50 + Math.random() * 30; // 目标圆周运动半径
        this.currentRadius = 0; // 当前圆周运动半径
        this.targetX = x;
        this.targetY = y;
        this.velocityX = 0;
        this.velocityY = 0;
        this.friction = 0.95;
        this.isOrbiting = false;
    }

    update(mouseX, mouseY) {
        if (this.isOrbiting) {
            // 圆周运动
            this.angle += this.speed;
            this.currentRadius += (this.targetRadius - this.currentRadius) * 0.1;
            this.x = mouseX + Math.cos(this.angle) * this.currentRadius;
            this.y = mouseY + Math.sin(this.angle) * this.currentRadius;
        } else {
            // 追逐鼠标
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                this.isOrbiting = true;
            }

            this.velocityX += dx * 0.05;
            this.velocityY += dy * 0.05;
            
            this.velocityX *= this.friction;
            this.velocityY *= this.friction;
            
            this.x += this.velocityX;
            this.y += this.velocityY;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

class ParticleSystem {
    constructor(options = {}) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        // 初始鼠标位置设为屏幕中心
        this.mouseX = window.innerWidth / 2;
        this.mouseY = window.innerHeight / 2;
        this.isMouseMoving = false;
        this.mouseTimer = null;

        // 配置参数
        this.options = {
            particleCount: options.particleCount || 50,
            particleSize: options.particleSize || 3,
            particleSizeVariation: options.particleSizeVariation || 1,
            baseRadius: options.baseRadius || 50,
            radiusVariation: options.radiusVariation || 30,
            brightness: options.brightness || 0.8,
            initialSpread: options.initialSpread || 100  // 初始分布范围
        };

        this.init();
    }

    init() {
        // 设置画布
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);

        // 调整画布大小
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // 获取初始鼠标位置
        document.addEventListener('mousemove', (e) => {
            if (this.particles.length === 0) {
                // 第一次移动鼠标时才创建粒子
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
                this.createParticles();
            }
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.isMouseMoving = true;
            
            clearTimeout(this.mouseTimer);
            this.mouseTimer = setTimeout(() => {
                this.isMouseMoving = false;
            }, 100);
        }, { once: true }); // 只监听第一次移动

        // 开始动画
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < this.options.particleCount; i++) {
            const size = this.options.particleSize + 
                (Math.random() * 2 - 1) * this.options.particleSizeVariation;
            
            const hue = Math.random() * 360;
            const color = `hsla(${hue}, 70%, 60%, ${this.options.brightness})`;
            
            // 在鼠标周围随机位置生成粒子
            const angle = Math.random() * Math.PI * 2;
            const spread = Math.random() * this.options.initialSpread;
            const particleX = this.mouseX + Math.cos(angle) * spread;
            const particleY = this.mouseY + Math.sin(angle) * spread;
            
            this.particles.push(new Particle(
                particleX,
                particleY,
                size,
                color
            ));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            if (this.isMouseMoving) {
                particle.isOrbiting = false;
            }
            particle.update(this.mouseX, this.mouseY);
            particle.draw(this.ctx);
        });

        requestAnimationFrame(() => this.animate());
    }
} 