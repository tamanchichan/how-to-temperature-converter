# Tutorial On How To Make A Temperature Converter:
```html
<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./assets/style/index.css">
    <link rel="icon" type="image/x-icon" href="./assets/image/favicon.ico">
    <meta charset="UTF-8">
    <meta name="author" content="Taman Chi Chan">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <title>Converter | Taman Chi Chan</title>
    <script src="./assets/script/index.js" defer></script>
  </head>
  <body>
    <header>
      <div class="container flex">
        <h1>Assignment 5: Converter</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div class="container">
        <h2>Temperature Converter</h2>
        <form>
          <input type="text" class="input-number" autofocus>
          <input type="button" value="convert" class="convert-button">
          <div class="flex convert-input">
            <div class="to-fahrenheit">
              <input type="radio" id="toFahrenheit" name="temperature">
              <label for="toFahrenheit">To Fahrenheit</label>
            </div>
            <div class="to-celsius">
              <input type="radio" id="toCelsius" name="temperature">
              <label for="toCelsius">To Celsius</label>
            </div>
          </div>
        </form>
        <div class="output">
          <p></p>
        </div>
      </div>
    </main>
    <footer>
      <div class="container">
        <button class="switch-appearance-button">Dark Mode</button>
      </div>
    </footer>
  </body>
</html>
```