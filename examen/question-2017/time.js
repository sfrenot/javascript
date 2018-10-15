a = () => { console.log("coucou"); return () => {}; }

setTimeout(a, 1000);
console.log("bye");
