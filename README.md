<p align="center">✨ QA Automation – Web Testing with Katalon Studio, Excel Data Files & Allure Report ✨</p>
<p align="center"> 
  <img src="https://img.shields.io/badge/Katalon-Studio-blue" /> 
  <img src="https://img.shields.io/badge/Groovy-3+-green" /> 
  <img src="https://img.shields.io/badge/SauceDemo-Automation-lightgrey" /> 
  <img src="https://img.shields.io/badge/Allure-Report-purple" /> 
</p>

---

🎯 **Project Goals**

Project ini dibuat untuk menunjukkan kemampuan saya dalam:

🚀 Merancang **test automation yang scalable** menggunakan Katalon Studio

📊 Mengelola **test data menggunakan Excel / Data Files** untuk data-driven testing

🧱 Mengimplementasikan **Custom Keywords & Reusable Functions** agar mudah dirawat

🧪 Menggunakan **Test Suite, Test Cases, dan Setup/TearDown hooks** dengan best practice

🛒 Melakukan automasi **end-to-end pada website SauceDemo**

---

🧩 **Teknologi yang Digunakan**

| Tools | Fungsi |
|-------|--------|
| **Katalon Studio** | Test automation platform berbasis Selenium / Groovy |
| **Groovy** | Bahasa scripting untuk custom keywords & test logic |
| **SauceDemo** | Website target automation |
| **Excel / Data Files** | Data-driven testing |
| **Test Suite & Test Cases** | Struktur test automation |
| **Allure Report** | Reporting hasil eksekusi test |

---

🧪 **Contoh Test Case (Data-Driven)**

**Variables di Test Case:**
| Variable | Type |
|----------|------|
| username | String |
| password | String |

**Excel Data File (LoginData.xlsx):**
| username      | password     |
|---------------|------------|
| standard_user | secret_sauce |
| locked_user   | secret_sauce |

**Test Case Script (Groovy)**
```groovy
WebUI.setText(findTestObject('input_username'), username)
WebUI.setText(findTestObject('input_password'), password)
WebUI.click(findTestObject('btn_login'))

WebUI.verifyElementPresent(findTestObject('products_page'), 10)
