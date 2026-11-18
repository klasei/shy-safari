<script lang="ts">
  /**
   * Which Scene to start in, on the start card. A grid of large tiles rather
   * than a drop-down, so a Scene can be picked from anywhere in the room: each
   * tile is a Scene — its picture, its name, and the animals it brings — big
   * enough to read across a classroom. The Scene on screen is the one with the
   * tick; choosing another swaps it in, and each Scene keeps its animals, so
   * switching loses nothing.
   *
   * A tile is badged "New" while it holds a Scene the teacher has not seen yet
   * (`newScenes.svelte.ts`); a Scene only on offer for a while keeps its
   * "Limited" badge.
   */

  import { onMount, untrack } from "svelte";
  import type { App } from "$lib/app.svelte";
  import { t, type UiKey } from "$lib/i18n/index.svelte";
  import { availableScenes, type SceneId } from "$lib/scenes";
  import { newScenes } from "$lib/scenes/newScenes.svelte";
  import { isLimited, sceneHint } from "$lib/scenes/halloween/wording";
  import { today } from "$lib/today.svelte";

  let { app }: { app: App } = $props();

  // Still badged while the grid is on screen, though seen from now on.
  const fresh = untrack(() =>
    newScenes.unseen(today.day).map((scene) => scene.id),
  );
  onMount(() => newScenes.markSeen(today.day));

  function choose(id: SceneId) {
    app.useScene(id);
  }
</script>

<!-- Its contents are hidden, not absent, until the saved Scene is known: the
     page is prerendered, and a reload should not flash the default. -->
<div
  role="group"
  aria-label={t("scene.change")}
  class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-4"
  class:invisible={!app.restored}
>
  {#each availableScenes(today.day) as scene (scene.id)}
    {@const current = scene.id === app.scene.id}
    <button
      type="button"
      aria-current={current}
      class={
        "relative flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-500/40 sm:gap-2.5 sm:p-5 short:gap-1.5 short:p-3" +
        (current
          ? " border-sky-500 bg-sky-50 shadow-md"
          : " border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm")
      }
      onclick={() => choose(scene.id)}
    >
      <img src={scene.icon} alt="" class="size-16 sm:size-20 short:size-16" />
      <span
        class={
          "block text-base leading-tight sm:text-lg short:text-base " +
          (current ? "font-bold text-sky-900" : "font-semibold text-slate-900")
        }
      >
        {t(`scene.${scene.id}.name` as UiKey)}
      </span>
      <span
        class="block max-w-full text-xs leading-snug text-slate-500 sm:text-sm short:text-xs"
      >
        {sceneHint(scene.id, today.day)}
      </span>
      {#if isLimited(scene.id)}
        <span
          class="absolute top-2 right-2 inline-flex items-center rounded-full bg-orange-100 px-2 py-0.5 text-[0.625rem] font-semibold tracking-wide whitespace-nowrap text-orange-800 uppercase"
        >
          {t("hollow.limited")}
        </span>
      {:else if fresh.includes(scene.id)}
        <span
          class="absolute top-2 right-2 inline-flex items-center rounded-full bg-sky-100 px-2 py-0.5 text-[0.625rem] font-semibold tracking-wide whitespace-nowrap text-sky-800 uppercase"
        >
          {t("scene.new")}
        </span>
      {/if}
      {#if current}
        <span
          class="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-sky-500 text-white shadow ring-2 ring-white"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            class="size-4"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m5 12 5 5 9-10" />
          </svg>
        </span>
      {/if}
    </button>
  {/each}
</div>
