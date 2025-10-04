
function makeBigger() {
      document.getElementById("userText").style.fontSize = 24 + "px";
}

function FancyShmancy(){
    alert("bold text!");
    document.getElementById("userText").style.fontWeight = 'bold';
    document.getElementById("userText").style.color  = 'blue';
    document.getElementById("userText").style.textDecoration = 'underline';


}

function BoringBetty(){
    alert("return to normal text!");
    document.getElementById("userText").style.fontWeight = 'normal';
    document.getElementById("userText").style.color  = 'black';
    document.getElementById("userText").style.textDecoration = 'none';

}

function makeUppercase(){
      let textArea = document.getElementById("userText");
      let text = textArea.value.toUpperCase();
      let sentences = text.split(/([.!?])/);
      let transformed = sentences.map((part, index) => {
        if (/[.!?]/.test(part)) {
          return part; 
        } else {
          let words = part.trim().split(/\s+/);
          if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] = words[words.length - 1] + "-Moo";
          }
          return words.join(" ");
        }
      }).join("");

      textArea.value = transformed;
    }