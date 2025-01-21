import { PROJECT } from "../data/projects";

export function getContent(content: any): any {
  let userPreferredLanguage = navigator.language || "en-EN";
  let version: string = window.location.pathname.split("/")[1];
  if (version.length === 2) version = content[version];
  else version = content[userPreferredLanguage.split("-")[0]] || content.en;
  return version;
}

export function getUrl(url: string): string {
  let version: string = window.location.pathname.split("/")[1];
  if (version.length === 2) return "/" + version + url;
  else return url;
}

export function getExperienceYears(): string {
  let start = new Date("01/01/2020");
  let now = new Date();
  return "+" + (now.getFullYear() - start.getFullYear());
}

export function countCompletedProjects(): number {
  return PROJECT.projects.filter((p) => p.completed).length;
}

export function changeNavOnElementAppear(
  navItem: string,
  observableItem: string
): any {
  let observer: IntersectionObserver;
  observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        let el = document.querySelector(`[href='#${navItem}']`);
        if (entry.intersectionRatio > 0.5) {
          el?.parentElement?.classList.add("active");
          window.history.replaceState(
            null,
            "/",
            window.location.pathname + "#" + navItem
          );
        } else {
          el?.parentElement?.classList.remove("active");
        }
      });
    },
    {
      threshold: [0.5],
    }
  );
  document.querySelectorAll(observableItem).forEach(function (item) {
    observer?.observe(item);
  });
  return observer;
}

export function log(...values: any[]): void {
  console.log(values)
}