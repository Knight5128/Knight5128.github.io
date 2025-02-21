<template>
    <div class="category-card" :class="theme">
        <div class="card-icon">
            <i :class="getIcon()"></i>
        </div>
        <h3>{{ title }}</h3>
        <div class="card-description">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryCard',
    props: {
        title: String,
        theme: String
    },
    methods: {
        getIcon() {
            const icons = {
                '知行合一': 'fas fa-walking',
                '技术分享': 'fas fa-code',
                '心情随笔': 'fas fa-pen-fancy',
                '收集整理': 'fas fa-archive',
                '机器人': 'fas fa-robot',
                '网络安全': 'fas fa-shield-alt',
                '概念': 'fas fa-lightbulb'
            }
            return icons[this.title] || 'fas fa-folder'
        }
    }
}
</script>

<style scoped>
.category-card {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
}

.category-card:hover {
    transform: translateY(-5px);
}

.card-icon {
    font-size: 2em;
    margin-bottom: 15px;
}

.card-description {
    font-size: 0.9em;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
}

.category-card:hover .card-description {
    opacity: 1;
    transform: translateY(0);
}
</style> 