# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Creating a custome hooks using this projects 

In app.jsx it will take two files data from src 

1- Rendom.js
2- Tag.js 

After clicking the buutton on generate gif then one loding screen will show 


files 

1 - .env contain the API key 
2 - Rendom.js use .env and in this it will it will contain the code of random gif after click the generator button 


# 1- RandomGif.jsx

it is basically use a api called giphy gifs and this 

first we get the data by calling this API and store the data into data ok then i use try and catch block beacuse it is an api call i use axios for fetching the data 

# axious 

it is same like fetch but the difference is while using fetch we have to convert it into jason but using axious it automatically contert the data into json 

# using useeffect in this 

hum isme use effect ka use is liye kr rhe hai kyo ki jb phli baad componnt mount ho yani lode hoo to yek gif dhike uske. agr hum yeshai nhi krenge to 2 consdition hogi ya to gif show hi nhi krege ya to automatically change hota rheega.

# creating an custome hook 

we create an custome hooks beacuse if we want to like make our code sorter and and eaiser to then not in jsx code only but only in react code then we use the custome hooks means we created it by our self for aur ease.

# what we need in custome hooks 

1- thing that is use by the components 
2- it will retrun those value which is usefull for the other components where we use these same value 

# ex -  
In this code we are created two components and boths components has same work like fetching the data form API and then show the responce so insted of calling both the API'S in diffrent files we created a Hook where we get the API data as a responce and then we return those usefull data form customeHooks like {images , name etc } and use it in the Randomgif.jsx as well as SearchGif.jsx

mtlb hum cutomehooks me joo vohi chizee return krte hai joo hum use kr rhe hai apne random.jsx me aur searchgif.jsx me 

    return{gif , loading , fetchData};


