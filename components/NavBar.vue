<template>
    <nav class="navbar">
        <div class="logo">Doiiars Blog</div>
        <div class="nav-links">
            <a href="#" class="nav-link">首页</a>
            <a href="#" class="nav-link">搜索</a>
            <a href="#" class="nav-link">归档</a>
            <a href="#" class="nav-link">友链</a>
            <a href="#" class="nav-link">ChatGPT</a>
            <a href="#" class="nav-link">Alist</a>
            <a href="#" class="nav-link">CDDA-Guide</a>
            <a href="#" class="nav-link">Github</a>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style> 