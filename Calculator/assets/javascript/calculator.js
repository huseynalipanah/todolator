window.onload = function () {
  // Pəncərənin yüklənməsi tamamlandıqda funksiyanı çağırır
  let buttons = Array.from(document.getElementsByTagName("button")); // Bütün düymələri müəyyən edir
  let result = document.getElementById("result"); // Nəticə elementini tapır
  let calculation = []; // Hesablama üçün boş bir massiv yaradır

  buttons.map((button) => {
    // Hər bir düymə üçün funksiya çağırır
    button.addEventListener("click", (e) => {
      // Düyməyə klikləndikdə hadisəni icra edir
      if (result.value === "0") result.value = ""; // Əgər nəticə 0-dırsa, onu boş stringə çevirir
      if (e.target.innerText === "=") {
        // Əgər düymə '='-dırsa
        try {
          result.value = eval(calculation.join("")); // Hesablamanı icra edir və nəticəni göstərir
        } catch {
          result.value = "Xəta!"; // Əgər xəta baş verərsə, xəta mesajını göstərir
        }
        calculation = []; // Hesablama massivini təmizləyir
      } else {
        // Əgər düymə hər hansı bir riyaziyyat əməliyyatı və ya rəqəm olsa
        calculation.push(e.target.innerText); // Düymənin mətnini hesablama massivinə əlavə edir
        result.value += e.target.innerText; // Düymənin mətnini nəticəyə əlavə edir
      }
    });
  });

  window.addEventListener("keydown", (e) => {
    // Klaviaturada düymə basıldıqda hadisəni dinləyir
    let key = e.key; // Basılan düymənin dəyərini alır
    let validKeys = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "+",
      "*",
      "/",
    ]; // Keçərli düymələrin siyahısını yaradır
    if (validKeys.includes(key)) {
      // Əgər basılan düymə keçərli düymələrdənsə
      if (result.value === "0") result.value = ""; // Əgər nəticə 0-dırsa, onu boş stringə çevirir
      calculation.push(key); // Basılan düymənin dəyərini hesablama massivinə əlavə edir
      result.value += key; // Basılan düymənin dəyərini nəticəyə əlavə edir
    } else if (key === "Enter") {
      // Əgər basılan düymə 'Enter'-dırsa
      try {
        result.value = eval(calculation.join("")); // Hesablamanı icra edir və nəticəni göstərir
      } catch {
        result.value = "Xəta!"; // Əgər xəta baş verərsə, xəta mesajını göstərir
      }
      calculation = []; // Hesablama massivini təmizləyir
    } else if (key === "Backspace") {
      // Əgər basılan düymə 'Backspace'-dırsa
      calculation = []; // Hesablama massivini təmizləyir
      result.value = ""; // Nəticəni boş stringə çevirir
    }
  });
};
