document.querySelector(".msg").innerText = 10;

setTimeout(() => {
  document.querySelector(".msg").innerText = 9;
  setTimeout(() => {
    document.querySelector(".msg").innerText = 8;
    setTimeout(() => {
      document.querySelector(".msg").innerText = 7;
      setTimeout(() => {
        document.querySelector(".msg").innerText = 6;
        setTimeout(() => {
          document.querySelector(".msg").innerText = 5;
          setTimeout(() => {
            document.querySelector(".msg").innerText = 4;
            setTimeout(() => {
              document.querySelector(".msg").innerText = 3;
              setTimeout(() => {
                document.querySelector(".msg").innerText = 2
                setTimeout(() => {
                  document.querySelector(".msg").innerText = 1;
                  setTimeout(() => {
                    document.querySelector(".msg").innerText =
                      "Happy Independence Day";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
