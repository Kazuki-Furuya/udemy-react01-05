import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.addEventListener("click", () => {
    alert("complete");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのおやタグを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  console.log(completeButton);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
