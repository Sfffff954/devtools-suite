# Installation Guide for DevTools Suite

## Introduction
Welcome to the DevTools Suite! This guide will provide you with a thorough installation process, a quick start guide, and detailed usage instructions for all five tools included in the suite.

## Installation Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sfffff954/devtools-suite.git
   cd devtools-suite
   ```
2. **Install Dependencies**:
   Make sure you have Node.js installed. Run:
   ```bash
   npm install
   ```
3. **Run the Tools**:
   You can run any of the tools using:
   ```bash
   node <tool_name>
   ```

## Quick Start
After installation, you can quickly start using the tools:
- For **Password Manager**, run:
   ```bash
   node password-manager.js
   ```
- For **JSON Formatter**, run:
   ```bash
   node json-formatter.js
   ```
- For **Markdown to HTML**, run:
   ```bash
   node markdown-to-html.js
   ```
- For **API Tester**, run:
   ```bash
   node api-tester.js
   ```
- For **File Organizer**, run:
   ```bash
   node file-organizer.js
   ```

## Detailed Usage Instructions
### 1. Password Manager
- **Features**: Generate, store, and manage your passwords securely.
- **Usage**: 
   - To generate a password, use:
   ```bash
   node password-manager.js generate
   ```
   - To view saved passwords:
   ```bash
   node password-manager.js list
   ```

### 2. JSON Formatter
- **Features**: Format and beautify JSON data.
- **Usage**: 
   - To format a JSON file:
   ```bash
   node json-formatter.js <input_file.json>
   ```
   - Example command:
   ```bash
   node json-formatter.js data.json
   ```

### 3. Markdown to HTML
- **Features**: Convert markdown files to HTML.
- **Usage**:
   - To convert a markdown file:
   ```bash
   node markdown-to-html.js <input_file.md>
   ```
   - Example command:
   ```bash
   node markdown-to-html.js README.md
   ```

### 4. API Tester
- **Features**: Test RESTful APIs with various methods.
- **Usage**:
   - To test an API:
   ```bash
   node api-tester.js <url> <method>
   ```
   - Example command:
   ```bash
   node api-tester.js https://jsonplaceholder.typicode.com/posts GET
   ```

### 5. File Organizer
- **Features**: Organize files in your directory by type.
- **Usage**:
   - To run the file organizer:
   ```bash
   node file-organizer.js <directory_path>
   ```
   - Example command:
   ```bash
   node file-organizer.js ./my-files
   ```

## Conclusion
This concludes the installation guide. For further assistance, please refer to our documentation or contact support.