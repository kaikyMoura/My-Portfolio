"use client";

import { useEffect } from 'react';

// Tipos para o Google Translate
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (options: Record<string, unknown>, element: string): unknown;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    // Adiciona o script do Google Translate
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Função de inicialização do Google Translate
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'en,es,fr,de,it,ja,ko,zh-CN,ru,ar',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');
    };

    // Adiciona estilos customizados para o dropdown
    const style = document.createElement('style');
    style.textContent = `
      .goog-te-gadget {
        font-family: 'Poppins', sans-serif !important;
      }
      
      .goog-te-gadget .goog-te-combo {
        background: transparent !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        border-radius: 8px !important;
        color: white !important;
        padding: 6px 12px !important;
        font-size: 14px !important;
        font-family: 'Poppins', sans-serif !important;
        cursor: pointer !important;
        transition: all 0.15s ease !important;
        outline: none !important;
        min-width: 120px !important;
      }
      
      .goog-te-gadget .goog-te-combo:hover {
        border-color: rgba(255, 255, 255, 0.4) !important;
        background: rgba(255, 255, 255, 0.1) !important;
      }
      
      .goog-te-gadget .goog-te-combo:focus {
        border-color: rgba(255, 255, 255, 0.6) !important;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1) !important;
      }
      
      .goog-te-gadget .goog-te-combo option {
        background: #1a1a1a !important;
        color: white !important;
        font-family: 'Poppins', sans-serif !important;
        padding: 8px !important;
      }
      
      .goog-te-banner-frame {
        display: none !important;
      }
      
      .goog-te-menu-value {
        color: white !important;
      }
      
      .goog-te-menu-value span:first-child {
        color: white !important;
      }
      
      .goog-te-menu-value span:last-child {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      
      .goog-te-gadget img {
        display: none !important;
      }
      
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
      }
      
      body {
        top: 0px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Limpa o script e estilos quando o componente for desmontado
      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      const existingStyle = document.querySelector('style');
      if (existingScript) {
        existingScript.remove();
      }
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-white/80">🌐</span>
      <div id="google_translate_element" className="text-sm"></div>
    </div>
  );
}

export default GoogleTranslate; 