    function convert() {
      const value = document.getElementById("inputValue").value.trim();
      const mode = document.getElementById("convertDirection").value;
      let result = "";

      switch (mode) {
        case "decToHex":
          const decToHex = parseInt(value, 10);
          result = !isNaN(decToHex)
            ? decToHex.toString(16).toUpperCase()
            : "❌ Invalid decimal!";
          break;

        case "hexToDec":
          result = /^[0-9a-fA-F]+$/.test(value)
            ? parseInt(value, 16).toString(10)
            : "❌ Invalid hex!";
          break;

        case "decToBin":
          const decToBin = parseInt(value, 10);
          result = !isNaN(decToBin)
            ? decToBin.toString(2)
            : "❌ Invalid decimal!";
          break;

        case "binToDec":
          result = /^[01]+$/.test(value)
            ? parseInt(value, 2).toString(10)
            : "❌ Invalid binary!";
          break;

        case "binToHex":
          result = /^[01]+$/.test(value)
            ? parseInt(value, 2).toString(16).toUpperCase()
            : "❌ Invalid binary!";
          break;

        case "hexToBin":
          result = /^[0-9a-fA-F]+$/.test(value)
            ? parseInt(value, 16).toString(2)
            : "❌ Invalid hex!";
          break;

        default:
          result = "❌ Unknown conversion!";
      }

      document.getElementById("result").innerText = "Result: " + result;
    }