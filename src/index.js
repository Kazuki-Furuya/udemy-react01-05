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
    const addTarget = completeButton.parentNode;
    // 未完了リストから削除
    deleteFromIncompleteList(addTarget);

    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "back";

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(div);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのおやタグを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  const backButton = document.createElement("button");
  backButton.innerText = "back";
  backButton.addEventListener("click", () => {
    alert("back");
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

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
