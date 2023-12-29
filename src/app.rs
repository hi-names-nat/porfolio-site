use yew::prelude::*;
use crate::components::nav::Nav;

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <main class="">
            <div class="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_10px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <p>{"text"}</p>
            </div>
        </main>
    }
}
