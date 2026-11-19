import os
import streamlit as st
import streamlit.components.v1 as components

# Configure Streamlit page with Claude-inspired warm aesthetics
st.set_page_config(
    page_title="HappySmile lead callback mockup (fictional case)",
    page_icon="🦷",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Streamlit CSS tweaks: hide Streamlit default chrome & margins to give 100% viewport to the mockup
st.markdown("""
<style>
    header[data-testid="stHeader"] {
        display: none !important;
    }
    footer {
        display: none !important;
    }
    #MainMenu {
        display: none !important;
    }
    .stAppDeployButton {
        display: none !important;
    }
    .block-container {
        padding: 0 !important;
        margin: 0 !important;
        max-width: 100% !important;
    }
    iframe {
        border: none !important;
        width: 100% !important;
        background-color: #FBF9F5 !important;
    }
</style>
""", unsafe_allow_html=True)

def load_bundled_html():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(current_dir, "index.html")
    css_path = os.path.join(current_dir, "styles.css")
    js_path = os.path.join(current_dir, "app.js")

    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    with open(css_path, "r", encoding="utf-8") as f:
        css = f.read()
    with open(js_path, "r", encoding="utf-8") as f:
        js = f.read()

    # Inline styles and scripts for 100% self-contained execution inside Streamlit
    bundled = html.replace('<link rel="stylesheet" href="styles.css">', f'<style>\n{css}\n</style>')
    bundled = bundled.replace('<script src="app.js"></script>', f'<script>\n{js}\n</script>')
    return bundled

# Render the interactive web mockup
bundled_html = load_bundled_html()
components.html(bundled_html, height=1350, scrolling=True)
