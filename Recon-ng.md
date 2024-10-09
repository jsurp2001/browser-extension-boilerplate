# Recon-ng

## 1. Name of the Software:
**Recon-ng**  
GitHub: [Recon-ng Repository](https://github.com/lanmaster53/recon-ng)

## 2. Brief Description:
Recon-ng is an open-source reconnaissance framework written in Python, designed to automate the collection of Open Source Intelligence (OSINT). It has a modular structure, similar to Metasploit, which enables users to collect information on target domains, IPs, emails, and social media profiles, aiding in ethical hacking and penetration testing.

## 3. Installation Commands:

**Linux (Kali Pre-installed):**
```bash
sudo apt-get update && sudo apt-get install recon-ng
```

**Linux/macOS/Windows (Source Installation):**
```bash
git clone https://github.com/lanmaster53/recon-ng.git
cd recon-ng
pip install -r REQUIREMENTS
./recon-ng
```

**Docker Installation:**
```bash
docker build --rm -t recon-ng .
docker run --rm -it -p 5000:5000 -v $(pwd):/recon-ng -v ~/.recon-ng:/root/.recon-ng --entrypoint "./recon-ng" recon-ng
```

## 4. Common Commands and Use Cases:

- **Module Management:**
  - Search for a module: `marketplace search <module_name>`
  - Install a module: `marketplace install <module_path>`
  - Load a module: `modules load <module_path>`
  
- **Using Modules:**
  - Set options: `options set SOURCE <target.com>`
  - Execute: `run`
  
- **Managing API Keys:**
  - Add API key: `keys add shodan_api <api_key>`

**Example Use Case:**  
Using the "HackerTarget" module to gather subdomains for a target domain:
```bash
marketplace install recon/domains-hosts/hackertarget
modules load recon/domains-hosts/hackertarget
options set SOURCE example.com
run
```

## 5. Tips, Tricks, and Techniques:
- **Workspace Management**: Organize separate projects using workspaces:
```bash
workspaces create <name>
workspaces select <name>
workspaces delete <name>
```
- **Snapshot Feature**: Save data snapshots for later analysis:
```bash
snapshots create <snapshot_name>
```

## 6. Performance Optimization:
Increase thread count for faster execution:
```bash
options set THREADS 20
```
Use a proxy to bypass rate limits:
```bash
options set PROXY <proxy_address>
```

## 7. Privacy Concerns:
Recon-ng uses API keys, which are stored locally in an SQLite database (`~/.recon-ng/keys.db`). Ensure that these keys are securely stored and avoid sharing them publicly. Always follow ethical guidelines when collecting OSINT data to remain compliant with legal requirements.

## 8. Security:
Ensure modules and their dependencies are secure before use. Regularly update both the Recon-ng framework and its modules. Always use secure methods for storing sensitive API keys.

## 9. License and Contribution:
Recon-ng is licensed under the BSD 3-Clause License. Contributions are welcome via GitHub. Users can submit issues, suggest new features, or contribute directly by creating pull requests.

## 10. Documentation:
- Official Documentation: [Recon-ng Documentation](https://github.com/lanmaster53/recon-ng/wiki)

## 11. Free Learning Resources:
- **Articles**:
  - [Recon-ng Guide by HackerTarget](https://www.hackertarget.com/recon-ng-tutorial/)
- **YouTube Tutorials**:
  - [Recon-ng Tutorial](https://www.youtube.com/watch?v=d2MTgAv0DRI)
- **Cheat Sheets**:
  - [Recon-ng Cheat Sheet](https://github.com/lanmaster53/recon-ng/wiki)

## 12. Version History and Updates:
Recon-ng's latest version is version 5, which introduced a new marketplace structure where no modules are pre-installed. Users must refresh and install desired modules. Key differences from previous versions include improved API integration and a more modular framework.

## 13. Known Bugs and Issues:
The primary known issues involve module-specific dependencies that must be manually installed. Additionally, certain API-based modules require valid keys, which can cause failures if not configured correctly.

## 14. Third-Party Integrations:
Recon-ng supports integrations with services such as Shodan, HackerTarget, and FullContact. These require API keys to be set up using the `keys` command.

## 15. Comparable Software:
- **theHarvester**: Another tool for OSINT collection, specifically focused on email and domain information.
- **Maltego**: A comprehensive OSINT tool with graphical output and in-depth investigation capabilities.

## 16. User Base & Popularity:
Recon-ng is popular within the ethical hacking, penetration testing, and OSINT communities. It has over 4,000 stars on GitHub and is frequently discussed in cybersecurity forums and conferences.

## 17. OSINT Compatibility:
Recon-ng is highly suited for OSINT tasks, allowing users to collect and analyze vast amounts of public data from various online sources, making it ideal for footprinting and reconnaissance.

## 18. Linux Compatibility:
Recon-ng is fully compatible with Linux, and it can be easily installed on distributions like Kali Linux, which comes with Recon-ng pre-installed.