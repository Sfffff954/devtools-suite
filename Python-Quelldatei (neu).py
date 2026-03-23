import os
import sys
import platform
import json
import base64
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.fernet import Fernet

# --- KONFIGURATION ---
APP_NAME = "DevToolsSuite"
CONFIG_FILE = "vault.json"

def get_key(master_password):
    """Erzeugt einen AES-Key aus dem Master-Passwort."""
    salt = b'static_salt_for_demo' # In Produktion: Zufälliger Salt pro User!
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
    )
    key = base64.urlsafe_b64encode(kdf.derive(master_password.encode()))
    return Fernet(key)

def manage_vault():
    """Passwort-Tresor Logik."""
    mp = input("Master-Passwort eingeben: ")
    f = get_key(mp)
    
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, "r") as file:
            data = json.load(file)
            try:
                decrypted = f.decrypt(data["encrypted"].encode()).decode()
                print(f"\n🔓 Dein Tresor-Inhalt: {decrypted}")
            except:
                print("❌ Falsches Passwort oder beschädigte Daten!")
                return
    
    new_data = input("\nNeues Passwort/Daten zum Speichern (oder Enter zum Überspringen): ")
    if new_data:
        encrypted = f.encrypt(new_data.encode()).decode()
        with open(CONFIG_FILE, "w") as file:
            json.dump({"encrypted": encrypted}, file)
        print("✅ Sicher gespeichert!")

def install():
    system = platform.system()
    print(f"🚀 Installiere {APP_NAME} auf {system}...")
    if system == "Windows":
        # Beispiel: Pfad-Eintrag simulieren
        os.system(f'setx PATH "%PATH%;{os.getcwd()}"')
    else:
        # Beispiel: Symlink in /usr/local/bin (erfordert oft sudo)
        print("Info: Auf Linux kopiere dieses Skript nach /usr/local/bin/")
    print("✅ Installation abgeschlossen.")

def uninstall():
    if os.path.exists(CONFIG_FILE):
        os.remove(CONFIG_FILE)
    print(f"🗑️ {APP_NAME} wurde sauber entfernt.")

def main():
    print(f"--- {APP_NAME} CLI ---")
    choice = input("[1] Install [2] Uninstall [3] Passwort-Tresor [4] Exit: ")
    
    if choice == "1": install()
    elif choice == "2": uninstall()
    elif choice == "3": manage_vault()
    else: sys.exit()

if __name__ == "__main__":
    main()