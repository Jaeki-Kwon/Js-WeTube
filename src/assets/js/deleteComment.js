// const delbtn = document.getElementById("jsDeleteComment");

// console.log("delbtn > ", delbtn);
// const handleDelete = () => {
//   console.log("찍히냐?");
// };

// delbtn.addEventListener("click", handleDelete);

import axios from "axios";

const deleteBtn = document.querySelectorAll(".jsCommentDeleteBtn");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const deleteComment = (target) => {
  commentList.removeChild(target);
  commentNumber.innerText = parseInt(commentNumber.innerText, 10) - 1;
};

export const handleDelete = async (e) => {
  const videoId = window.location.href.split("/videos/")[1];
  const commentId = e.target.dataset.src;
  const target = e.target.parentNode;
  console.log("target > ", target);
  console.log("commentId > ", commentId);
  console.log("e.target > ", e.target);
  const response = await axios.post(`/api/${videoId}/${commentId}/delete`, {
    videoId,
    commentId,
  });

  if (response.status === 200) {
    deleteComment(target.parentNode);
  }
};

export const init = () => {
  deleteBtn.forEach((e) => e.addEventListener("click", handleDelete));
};

if (deleteBtn) {
  init();
}
