
# Web Technologies Project 2025

Aceasta este o aplicație web dezvoltată ca parte a proiectului pentru cursul de Tehnologii Web din 2025.

🔗 **Site live:**  
👉 [https://web-technologies-project-2025-eta.vercel.app/](https://web-technologies-project-2025-eta.vercel.app/)
c4 Diagram [https://app.diagrams.net/#G1Wiw_E68IFFvdTh3Nxjm4ZIcTwA1J1JoS#%7B%22pageId%22%3A%228LEbyJDZ149q0Q5UMYN_%22%7D](https://app.diagrams.net/#G1Wiw_E68IFFvdTh3Nxjm4ZIcTwA1J1JoS#%7B%22pageId%22%3A%228LEbyJDZ149q0Q5UMYN_%22%7D)

---

## Descriere

Aplicația ACA oferă o platformă modernă și responsivă care permite utilizatorilor să interacționeze cu o interfață web simplă și intuitivă, cu backend Node.js ce gestionează comunicarea client-server și servirea fișierelor statice.

---

## Structura proiectului

```
/dist
/backend    - cod server Node.js
  /backend-server
  /frontend-server
/frontend    
webpack.config.js - configurarea Webpack pentru bundling
.env        - fișierul cu variabile de mediu

````

---

## 🛠️ Tehnologii utilizate

- **Frontend:** HTML, CSS, JavaScript  
- **Bundler:** Webpack  
- **Backend:** Node.js  
- **Hosting backend:** Railway
-  **Hosting frontend:** Vercel

---

## 📦 Funcționalități

- Interfață web statică modernă și responsivă  
- Servire fișiere frontend prin server Node.js  
- Comunicare client-server  
- Design responsiv pentru desktop și mobil  

---

## ⚙️ Rulare locală

1. Clonează repository-ul:

```bash
git clone https://github.com/rykyfilipe/web-technologies-project-2025.git
cd web-technologies-project-2025
````

2. Instalează dependențele:

```bash
npm install
```

3. Setează variabilele de mediu (creează un fișier `.env` în rădăcina proiectului):

```
PORT=3000  # sau orice port dorești
```

4. Compilează frontend-ul cu Webpack:

```bash
npm run build
```
5. Pornește serverul backend:

```bash
cd backend/backend-server
node app.cjs
```

6. Pornește serverul frontend:

```bash
npm run start
```


7. Accesează aplicația în browser la:

```
http://localhost:3000
```

---

## 🛠️ Dezvoltare

Pentru rulare în modul dezvoltare cu reload automat:

```bash
npm run dev
```

---


## 🤝 Contribuții

Contribuțiile sunt binevenite! Pentru a contribui:

1. Fork repository-ul
2. Creează un branch nou (`feature/noua-functie`)
3. Trimite un Pull Request

---

## 📄 Licență

MIT License © Ryky Filipe

---

## 📞 Contact

Pentru întrebări sau colaborări, mă poți contacta la: [rykyfilipe@example.com](mailto:rykyfilipe@example.com)

```

---

Dacă vrei, pot personaliza mai mult sau adăuga alte secțiuni specifice proiectului tău!
```
