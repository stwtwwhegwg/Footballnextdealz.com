import React from 'react';

const Download = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-center">📱 FootballNextDealz – Android-App</h1>

      <p className="text-gray-600 text-center mb-6">
        Unsere APK wird bald verfügbar sein. Du wirst sie hier direkt herunterladen können!
      </p>

      <button
        disabled
        className="bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg opacity-60 cursor-not-allowed"
      >
        ⏳ APK-Download bald verfügbar
      </button>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Sobald die App fertig ist, erscheint hier
