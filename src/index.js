import { defineAsyncComponent } from "vue";
export default {
    install(e) {
        const o = import.meta.glob("./components/*.vue", { eager: !0 });
        Object.keys(o).forEach((n) => {
            const t = n.split("/").pop().replace(".vue", ""),
                p = o[n];
            e.component(
                t,
                defineAsyncComponent(() => Promise.resolve(p))
            );
        });
    },
};