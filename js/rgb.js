function channelSplit(elem) {
   if (elem) {
      const inner = elem.innerHTML;
      elem.innerHTML = "";
      
      const spanHidden = document.createElement("span");
      spanHidden.classList.add("channel-split-static");
      spanHidden.innerHTML = inner;
      elem.appendChild(spanHidden);
      
      ["red", "green", "blue"].forEach(x => {
         const span = document.createElement("span");
         span.classList.add("channel-split");
         span.classList.add(`channel-split-${x}`);
         span.innerHTML = inner;
         elem.appendChild(span);
      });
   }
}

channelSplit(document.getElementById("text"));
