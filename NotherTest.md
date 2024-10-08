# Recon-ng

1. **Name of the Software:**
   - [Recon-ng GitHub Repository](https://github.com/lanmaster53/recon-ng)

2. **Brief Description:**
   - Recon-ng is a web reconnaissance framework with independent modules, database interaction, built-in convenience functions, and interactive help. It is designed to automate the process of gathering intelligence about web applications, services, and people through open-source intelligence (OSINT) techniques. Recon-ng is a powerful tool for penetration testers, allowing them to gather data efficiently.

3. **Installation Commands:**
   - **Linux:**
     ```bash
     sudo apt-get update
     sudo apt-get install recon-ng
     ```
   - **macOS (via Homebrew):**
     ```bash
     brew install recon-ng
     ```
   - **Windows (via Python):**
     1. Install Python from [python.org](https://www.python.org/).
     2. Use pip to install:
        ```bash
        pip install recon-ng
        ```

   - **Common Installation Issues:**
     - **Python Dependency Issues:**
       - Make sure that Python 3.x is installed. If you face issues with missing modules, use:
         ```bash
         pip install -r requirements.txt
         ```

4. **Common Commands and Use Cases:**
   - **Starting Recon-ng Framework:**
     ```bash
     recon-ng
     ```
     This opens the Recon-ng interactive console.
   
   - **Common Modules:**
     - Load a specific module (e.g., `whois_pocs`):
       ```bash
       use recon/domains-hosts/whois_pocs
       ```
     - Set parameters for the module (e.g., domain):
       ```bash
       set SOURCE example.com
       ```
     - Execute the module:
       ```bash
       run
       ```

   - **Real-World Use Case:**
     - Recon-ng is used to collect subdomains from target websites, discover email addresses, gather whois information, and much more. For example, to gather subdomains from `example.com`:
       ```bash
       use recon/domains-hosts/brute_hosts
       set SOURCE example.com
       run
       ```

   - **Advanced Use Case:**
     - Recon-ng supports scripting for automation. Users can create custom workflows by chaining modules in a Python script to automate the entire OSINT collection process for penetration testing.

5. **Tips, Tricks, and Techniques:**
   - **Database Integration:**
     - Recon-ng includes a database that stores data collected during operations. Always use the `db_save` command to store your session:
       ```bash
       db_save <database_name>
       ```
   - **API Keys Setup:**
     - Recon-ng supports many third-party services, but you need to configure API keys for better functionality:
       ```bash
       keys add shodan_api <api_key>
       ```

6. **Performance Optimization:**
   - Limit the number of results fetched per module to optimize time:
     ```bash
     set LIMIT 50
     ```

7. **Privacy Concerns:**
   - Recon-ng relies on many third-party services (e.g., Shodan, Have I Been Pwned), so be cautious when using API keys linked to your personal accounts. Avoid exposing sensitive keys in publicly shared code or scripts.

8. **Security:**
   - Make sure to only use API keys in a controlled environment and regularly rotate them if using third-party services. Review and audit scripts regularly to ensure there are no security risks associated with automated processes.

9. **License and Contribution:**
   - **License:**
     - Recon-ng is licensed under the [BSD 3-Clause License](https://github.com/lanmaster53/recon-ng/blob/master/LICENSE).
   - **Contributing:**
     - Users can contribute via GitHub by submitting pull requests. Review the project's [contribution guidelines](https://github.com/lanmaster53/recon-ng/blob/master/CONTRIBUTING.md).

10. **Documentation:**
    - Official Documentation: [Recon-ng Wiki](https://github.com/lanmaster53/recon-ng/wiki)

11. **Free Learning Resources:**
    - **Free Articles:**
      - [Getting Started with Recon-ng](https://www.hackingarticles.in/getting-started-recon-ng/) - 2022
      - [Recon-ng for OSINT](https://www.cyberpunk.rs/recon-ng/) - 2023
    - **Free YouTube Tutorials:**
      - [Recon-ng Framework Tutorial for OSINT](https://www.youtube.com/watch?v=qXwY3S_oOFI) - 2022
      - [Recon-ng Basics](https://www.youtube.com/watch?v=aGrGpCC0QgY) - 2021
    - **Cheat Sheets:**
      - [Recon-ng Command Cheat Sheet](https://0xrick.github.io/lists/osint/#recon-ng)

12. **Version History and Updates:**
    - **Latest Release (v5.1.1)** - August 2023
      - Added new API key services.
      - Improved module performance and bug fixes.
   
13. **Known Bugs and Issues:**
    - **Issue with API Keys:** Some users have reported issues with certain API services not functioning properly. A workaround is to ensure the latest API keys are set correctly and update the module.
    - **Windows Compatibility:** Some modules may not work correctly on Windows due to dependencies not being supported.

14. **Third-Party Integrations:**
    - Recon-ng integrates with various third-party services like Shodan, VirusTotal, and Have I Been Pwned to enhance OSINT gathering capabilities.

15. **Comparable Software:**
    - **Maltego** - A similar OSINT framework with a graphical interface.
    - **Spiderfoot** - Another OSINT tool with a broader range of data sources and integration options.

16. **User Base & Popularity:**
    - Popular among penetration testers and OSINT enthusiasts, Recon-ng has over 3.8k stars on GitHub and a strong following in cybersecurity forums.

17. **OSINT Compatibility:**
    - Recon-ng is highly compatible with OSINT tasks, making it a preferred tool for gathering data from web-based sources, including domain information, email addresses, and subdomains.

18. **Linux Compatibility:**
    - Fully compatible with Linux systems, providing a smooth experience for Linux-based penetration testers.

19. **Referenced URLs:**
    - https://github.com/lanmaster53/recon-ng
    - https://www.hackingarticles.in/getting-started-recon-ng/
    - https://0xrick.github.io/lists/osint/#recon-ng
    - https://www.cyberpunk.rs/recon-ng/
    - https://www.youtube.com/watch?v=qXwY3S_oOFI
