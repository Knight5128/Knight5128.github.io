<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>关于本站</h4>
                <p>一个热爱技术的Geek的个人博客</p>
            </div>
            <div class="footer-section">
                <h4>联系方式</h4>
                <div class="social-links">
                    <a href="https://github.com/yourusername" target="_blank">GitHub</a>
                </div>
            </div>
            <div class="footer-section">
                <h4>站点信息</h4>
                <p>© 2024 Doiiars Blog</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin-top: 50px;
    padding: 30px 0;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    padding: 0 20px;
}

.footer-section {
    color: var(--text-color);
}

.social-links a {
    color: var(--text-color);
    text-decoration: none;
    margin-right: 15px;
}

.social-links a:hover {
    text-decoration: underline;
}
</style> 