import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoggerStore = defineStore('logger', () => {
    const color = ref('');

    function changeColor(newColor: string) {
        color.value = newColor;

        // Here, we are using the logger service from the container, which is injected into the context
        this.$context.loggerService.logStringWithColor(`String is now ${color.value}`, color.value);
    }

    return { color, changeColor };
});
