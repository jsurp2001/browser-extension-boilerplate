# EyeWitness

## Website/GitHub Repository:
[EyeWitness GitHub](https://github.com/FortyNorthSecurity/EyeWitness)

## Description:
EyeWitness is a tool developed for security reconnaissance of web-based applications, RDP services, and open VNC servers. It captures screenshots, server headers, and identifies potential vulnerabilities or default credentials.

## Installation, Update, and Removal:
- **Install**:
    ```bash
    sudo apt-get install -y python3 python3-pip
    git clone https://github.com/FortyNorthSecurity/EyeWitness.git
    cd EyeWitness/Python
    sudo pip3 install -r requirements.txt
    sudo python3 setup/setup.py install
    ```

- **Update**:
    ```bash
    cd ~/EyeWitness
    git pull
    sudo python3 setup/setup.py install
    ```

- **Remove**:
    ```bash
    rm -rf ~/EyeWitness
    sudo pip3 uninstall eyewitness
    ```

## Common Commands:
- **Single URL Scan**:
    ```bash
    ./EyeWitness.py --single https://example.com
    ```

- **Multiple URL Scan**:
    ```bash
    ./EyeWitness.py --web --threads 5 -f /path/to/url_list.txt
    ```

- **Service Scan (RDP, VNC, WebDAV)**:
    ```bash
    ./EyeWitness.py --rdp --openvnc --webdav
    ```

- **Generate Report**:
    ```bash
    ./EyeWitness.py --headless --report report_name
    ```

## Tips, Tricks, and Techniques:
1. Use the `--headless` mode for faster, GUI-less operation.
2. For large URL lists, utilize the `--threads` flag to speed up the process.
3. Combine EyeWitness with Nmap for in-depth vulnerability analysis.
4. Customize reports using the `--report` flag.
5. Scan remote services like RDP, VNC, and WebDAV for comprehensive OSINT.

## Documentation URL:
[EyeWitness Documentation](https://github.com/FortyNorthSecurity/EyeWitness/blob/master/README.md)

## Free Articles:
1. [Recon with EyeWitness - LinuxHint (2023)](https://linuxhint.com/eyewitness_recon_tool/)
2. [Offensive Security - EyeWitness Usage Guide (2022)](https://offensive-security.com/eyewitness-usage-guide/)
3. [EyeWitness: Simplifying Web Application Recon (2021)](https://medium.com/eyewitness-web-application-recon)

## Free Tutorials (PDF):
None available.

## Free YouTube Tutorials:
1. **"EyeWitness for Web Application Recon - Kali Linux" (2023)**: [YouTube](https://www.youtube.com/watch?v=PtcbmqFW6UM)
2. **"EyeWitness: Using Automated Screenshots for Recon" (2022)**: [YouTube](https://www.youtube.com/watch?v=qxdoFlp6jzc)
3. **"EyeWitness - Quick Start Guide" (2021)**: [YouTube](https://www.youtube.com/watch?v=SHjRtZnyO2Y)

## Free Cheat Sheets:
- **Cheatography - EyeWitness Cheat Sheet (2022)**: [Link](https://cheatography.com/eyewitness)

## Comparable Software:
1. **Aquatone** - Web screenshot and reconnaissance tool. [GitHub](https://github.com/michenriksen/aquatone)
2. **WebHarvy** - Web scraping and analysis tool, though not focused on security.

## OSINT Usability:
Yes, EyeWitness is highly effective for OSINT, particularly in reconnaissance and web-based assessments.

## Referenced URLs:
1. https://github.com/FortyNorthSecurity/EyeWitness
2. https://linuxhint.com/eyewitness_recon_tool/
3. https://offensive-security.com/eyewitness-usage-guide/
4. https://medium.com/eyewitness-web-application-recon
5. https://www.youtube.com/watch?v=PtcbmqFW6UM
6. https://www.youtube.com/watch?v=qxdoFlp6jzc
7. https://www.youtube.com/watch?v=SHjRtZnyO2Y
8. https://cheatography.com/eyewitness
