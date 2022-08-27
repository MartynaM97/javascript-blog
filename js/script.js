"use strict";

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log("Link was clicked!");

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* add class 'active' to the clicked link */

  console.log("clickedElement:", clickedElement);
  clickedElement.classList.add("active");

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll(".post");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* get 'href' attribute from the clicked link */

  const articleSelector = ClickedElement.getAttribute("href");
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const TargetArticle = document.querySelector(articleSelector);
  console.log(TargetArticle);

  /* add class 'active' to the correct article */

  TargetArticle.classList.add("active");
}

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks() {
  /* remove contents of titleList */

  const TitleList = document.querySelector(optTitleListSelector);
  TitleList.innerHTML = "";
  /* for each article */

  const articles = document.querySelector(optArticleSelector);

  let html = "";

  for (let article of Object.keys(articles)) {
    /* get the article id */

    const articleId = article.getAttribute("id");

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    /* create HTML of the link */

    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      "</span></a></li>";
    console.log(linkHTML);

    /* insert link into titleList */

    html = html + linkHTML;
  }

  TitleList.innerHTML = html;
}

const links = document.querySelectorAll(".titles a");
console.log(links);

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

generateTitleLinks();
