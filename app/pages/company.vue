<script setup lang="ts">
// /company 重定向到 /about，避免跨页面 import 破坏代码分割
navigateTo("/about", { redirectCode: 301 });
</script>
