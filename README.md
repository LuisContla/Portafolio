# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contact Form (EmailJS)

The contact page is integrated with EmailJS using these Vite environment variables:

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

1. Copy `.env.example` to `.env`.
2. Fill each value with your EmailJS keys.
3. Ensure your EmailJS template includes these variables:
	- `nombre`
	- `correo`
	- `asunto`
	- `mensaje`
4. Run the app with `npm run dev`.
