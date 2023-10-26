import { createElement } from "browser-extension-utils"

export default function createTag(
  tagName: string,
  options: Record<string, any>
) {
  const a = createElement("a")
  // a.textContent = tagName
  a.dataset.utags_tag = tagName
  if (!options.noLink) {
    a.setAttribute(
      "href",
      "https://utags.pipecraft.net/tags/#" + encodeURIComponent(tagName)
    )
    a.setAttribute("target", "_blank")
  }

  a.setAttribute(
    "class",
    options.isEmoji ? "utags_text_tag utags_emoji_tag" : "utags_text_tag"
  )
  return a
}
