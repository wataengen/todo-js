import "./styles.css";

const onClickAdd = () => {
  //　テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
   //div生成
   const div = document.createElement("div");
   div.className = "list-row";
 
   //li生成
   const li = document.createElement("li");
   li.innerText = text;
 
   //button(完了)タグの生成
   const completeButton = document.createElement("button");
   completeButton.innerText = "完了";
   completeButton.addEventListener("click", () => {
     // 押された完了ボタンの親タグ(div)を未完了リストから削除
     deleteFromIncompleteList(completeButton.parentNode);
     // 完了リストに追加する
     const addTarget = completeButton.parentNode;
 
     // TODO内容テキストを取得
     const text = addTarget.firstElementChild.innerText;
     // div以下を初期化
     addTarget.textContent = null;
     // liタグ生成
     const li = document.createElement("li");
     li.innerText = text;
     // 戻すボタンを生成
     const backButton = document.createElement("button");
     backButton.innerText = "戻す";
     backButton.addEventListener("click", ()=> {
       // 押された戻すボタンの親タグ(div)を完了リストから削除
       const deletTarget = backButton.parentNode;
       document.getElementById("complete-list").removeChild(deletTarget);
       // テキスト取得
       const text = backButton.parentNode.firstElementChild.innerText
       createIncompleteList(text);
     });
 
     addTarget.appendChild(li);
     addTarget.appendChild(backButton);
     document.getElementById("complete-list").appendChild(addTarget);
     
   });
 
   //button(削除)タグの生成
   const deletButton = document.createElement("button");
   deletButton.innerText = "削除";
   deletButton.addEventListener("click", () => {
     // 押された削除ボタンの親タグ(div)を未完了リストから削除
     deleteFromIncompleteList(deletButton.parentNode);
   });
 
   //divタグの子要素に各要素を設定
   div.appendChild(li);
   div.appendChild(completeButton);
   div.appendChild(deletButton);
 
   //未完了のリストに追加
   document.getElementById("incomplete-list").appendChild(div); 
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());