var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/mdecourse/cdbw15-2 \n group:1 \n Repository:\xa0 40723242 \xa0 | Site: \xa0 40723242 Repository:\xa0 40723229 \xa0 | Site: \xa0 40723229 Repository:\xa0 40723206 \xa0 | Site: \xa0 40723206 ---- group:2 \n Repository: \xa0 40732321 \xa0 | Site: \xa0 40732321 Repository: \xa0 40723222 \xa0 | Site: \xa0 40723222 Repository: \xa0 40723228 \xa0 | Site: \xa0 40723228 ---- group:3 \n Repository:\xa0 40723205 \xa0 | Site: \xa0 40723205 Repository:\xa0 40723203 \xa0 | Site: \xa0 40723203 Repository:  40623121 \xa0 | Site: \xa0 40623121 ---- group:4 \n Repository:\xa0 40723245 \xa0 | Site: \xa0 40723245 Repository:\xa0 40723210 \xa0 | Site: \xa0 40723210 Repository:\xa0 40723238 \xa0 | Site: \xa0 40723238 \n', 'tags': '', 'url': 'About.html'}, {'title': 'group1', 'text': '', 'tags': '', 'url': 'group1.html'}, {'title': '40723242', 'text': 'IPv4 Ubuntu對外連線設定操作: \n 操作步驟: \n \n 喜好設定->網路->新增一個新的NAT網路 \n 編輯NAT網路，新增4個連接埠轉送埠號 \n 設定主機IP為0.0.1，主機連接埠號為 22、19999、17443、18443，客體IP為10.0.2.4，客體連接埠號為22、19999、17443、18443 \n 點選設定>網路>設定為NAT Network \n 點選啟動，接著輸入密碼kmol2020 \n 開啟LXTermial，輸入ifconfig> sudo apt install net-tools>密碼kmol2020 \n cd tmp>ls>ping 127.0.0.1測試>cd cd2020pj1>git pull \n sudo vi wsgi.py編輯內容，將Host改成0.2.4 \n 開啟leo，開啟cd cd2020pj1點NAV尋找allowExt \n 點選fileuploadfrom，在第10行新增一個ttt檔，存儲 \n cd..，在tmp下新增oauth_scrum.txt並輸入sudo vi oauth_scrum.txt，儲存 \n cd cd2020pj1>python3 wsgi.py \n 網址為https:/127.0.0.1:18443/alogin \n 帳號及密碼都為admin，進入後點選fileuploadform，點選要上傳的ttt \n 15.選download list檢查是否上傳完成 \n \n IPv4 \xa0 遠端控制設定 \n 操作步驟 : \n \n 在 cmd 命令窗輸入 ipconfig 查 IPV4 IP \n 將虛擬主機的主機 IP 改為個人 IPV4 IP \n 啟動 Ubuntu 開啟 exe \n 開啟 putty ，並設定 IPV4 IP \n 設定 SSH 下的 X11 ，將 Enable X11 fowarding 打勾並在下面對話窗中輸入 localhost:0.0 \n 存儲後再啟動即可連線，輸入 kmol2020 \n 輸入 xterm& ， cd cd2020pj1>git pull>cd docs/cmsimde>vi wsgi.py> 更改 host 改為 0.2.4 ，儲存 \n 輸入 python3 wsgi.py ，網址為該主機 IP 加上 17443( https:// 主機IP:17443 \n \n \n IPv6 \xa0 遠端控制設定 \n 更改內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n \n \n \n network: \n \xa0\xa0\xa0\xa0 ethernets: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 enp0s3: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 dhcp4: true \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 dhcp6: true \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 nameservers: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 addresses: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 -   2001 :b000: 168 :: 11 \xa0 \n \xa0\xa0 version:  2 \n \n \n \n \n \n \n \n 操作步驟: \n 1.點選IPv6內容，IPv6位址輸入2001:288:6004:17:2020:2::7242(2為乙班、7227為乙班42號) 2.子網路首碼輸入64、預設匝道輸入2001:288:6006:17::254 3.開啟虛擬主機，設定系統埠號，將主機IP改為個人IP 4.啟動Ubuntu輸入密碼kmol2020 5.開啟LXTermial，並進入cd2020pj1 6.git pull檢查版本更新，cd docs/cmsimde 7.輸入vi wsgi.py，將host改為個人主機IP \n 8.在另一台主機開啟putty，輸入預連線主機IP 9.設定SSH下的X11，設定完成後存儲，在打開即可連線該主機 10.輸入帳密kmol2020，打開XLaunch.exe並輸入xterm&啟動 11.進入tmp/cd2020pj1/docs/cmsimde，輸入python3 wsgi.py開啟遠端 12.網址為[該主機IP]:17443 13.完成遠端控制 \n \n FileZilla \xa0 虛擬主機文件共享設定 \n 操作步驟 : \n 1.下載FileZilla \n 2.確認虛擬主機的IP後啟動 \n 3.開啟putty，設定個人主機IP \n 4.設定SSH中的X11，打勾並輸入localhost:0.0存儲後開啟 \n 5.輸入kmol2020 \n 6.開啟FileZilla，點選檔案->站台管理員->新增站台 \n 7.更改為 SFTP-SSH，輸入個人主機IP及22 \n 8.更改為詢問密碼、命名為kmol2020，密碼輸入kmol2020 \n 9.完成文件共享設定 \n 影片: \n \n', 'tags': '', 'url': '40723242.html'}, {'title': '40723229', 'text': '', 'tags': '', 'url': '40723229.html'}, {'title': '40723206', 'text': 'Ubnutu對外連線-IPV4 \n 1.選擇主機網路 NAT Network ，新增埠號如下圖所示 : \n \n 2.登入密碼一樣是 kmol2020 \n 3.打開 LXTermial 輸入 ifconfig>sudo apt install net-tools 輸入密碼也是 kmol2020 \n 4.輸入 ping6 127.0.0.1 測試是否可執行 \n 5.進入 cd2020pj1 資料夾然後 git pull \n 6.輸入 sudo vi wsgi.py 並且按下 i 編輯內容將 ’host=127.0.0.1’ 編輯設置為10.0.2.4 \n 7.按下 esc 並且輸入 :wq 來存取，開啟 cd2020pj1.leo \n 8.用 nav 尋找 allowExt 檔案位置並且新增 ttt 檔案 \n 9.在 tmp 下輸入 sudo vi oauth_scrum.txt 再輸入 python3 wsgi.py 開啟遠端 \n 10.進入 https://127.0.0.1:18443/alogin 測試是否可以上傳 ttt 檔案 \n ※  sudo 為使用特殊的權限執行的程式。 vi 為編輯內容 \n ※  ifconfig 為網卡信息的各項說 \n \xa0 \n \xa0*更新問題: \n 1.因為老師有將 cd2020pj1 更新，所以我們從虛擬主機下開啟 python3 wsgi.py 之模組有缺少問題 \n 解決 :  pip3 install pydrive安裝此模組 \n 2.mako系統版本沒有更新，導致遠端連線出現問題 \n 解決 :  輸入 ”sudo pip3 install mako==1.1.3” 更新版本 1.1.3 \n \n \xa0 \n Ubnutu對外連線-IPV6 (須在學校操作) \n 1.選擇主機網路 NAT Network 設定 IPV6 \n 2.打開 LXTermial 並且輸入 cd /etc \n 3.按照路徑進入 cd apt > cd apt.conf.d > sudo vi proxy.conf \n 5.密碼 kmol2020 並且一樣按 i 鍵進入編輯模式 \n 6.輸入 Acquire::http::proxy "http://[2001:288:6004:17::53]:3128"; \n 7.按 esc 並且使用 :wq 來儲存，再用 sudo apt update apt 更新 apt \n 8.ifconfig>sudo apt install net-tools， cd etc/netplan \n 9.輸入 sudo vi 00-installer-config.yaml 並且按照以下方式更改縮排 \n \n \n \n \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n network: \n \xa0\xa0ethernets: \n \xa0\xa0\xa0\xa0enp0s3: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0dhcp4: true \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0dhcp6: true \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0nameservers: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0addresses: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0- 2001:b000:168::1 \n \n \n \n \n 10.輸入 ping6 2001:288:6004:17::254 測試是否可以連線 \n 11.新增 4 個埠號 \n 12.輸入 ifconfig  來查詢在 IPV6 的 ip \n 13.進入 cd2020pj1 資料夾執行 git config --global --add http.proxy[2001:288:6004:17::53]:3128 \n 13.輸入 sudo vi wsgi.py wsgi.py 將近端的 host 更改成 :: ，再輸入 python3 wsgi.py \n 15.用平常開啟近端的方式 https://[::1]:18443/alogin \n 16.打開 leo 新增 ttt 檔案的上傳設定測試是否可以上傳 \n \n', 'tags': '', 'url': '40723206.html'}, {'title': 'group2', 'text': '', 'tags': '', 'url': 'group2.html'}, {'title': '40732321', 'text': 'IPV6下伺服器連線設定 \n 1. 先設定好網路連線下的host ip( ip的設定方式可以在cd2020pj1倉儲下的downaloads中找到) \n 2.設定網路的 ipv6 位置設定 (ipv6 guest ip : fd17:625c:f037:2:a00:27ff:fef6:9b8a) (個人host ip :\xa02001:288:6004:17:2020:2::7221)格式只需更改後方:2::7221) \n 3.進入 linux 虛擬主機，依照指令輸入 cd tmp>cd cd2020pj1>git pull >cd docs> cd cmsimde \n 4.輸入 vi wsgi.py \xa0 並且更改 host \n 5.設定好 putty \n 6.按下 save 並且 open 後，在 putty 頁面分別輸入兩次密碼 kmol2020 \n 7.開啟 Xming， 接著輸入 xterm& \n 8.在開啟的視窗中輸入 cd tmp>cd 2020pj1>cd docs>cd cmsimde>python3 wsgi.py \n 用 google 輸入網址 https://[2001:288:6004:17:2020:7221]:17443\xa0 ( 必須要用自己的 ip) \n 9.一開始無法登陸，必須要關閉 proxy ，並且重新整理該頁面就可以了 ( 若無法登陸可以嘗試關閉防火牆 ) \n cd2020pj1 ip 設定連結 : \xa0 https://github.com/mdecourse/cd2020/blob/master/downloads/w13_ipv6_assignment.txt \n Xming 下載連結 : \xa0 https://sourceforge.net/projects/xming/ \n 操作影片: \n \n IPV4下伺服器連線設定 \n 1. ipv4 伺服器設定教學 \n 2.先去找到家用的網路 ip因該會在windows設定底下>網路及網際網路>檢視你的網路內容下 \n 3. 去 ubnutu 設定主機 ip為自己家裡的ip \n 4. 設定 putty 和 x11 \n 5. 開啟虛擬主機 \n 6. 跟著路徑進入注意這裡 git pull ( 若失敗可以使用git reset\xa0 --hard在git pull) \n 7. 跟著路徑進入 cmsimde \n 8.用vi wsgi.py編輯host為客體ip \n 9. 輸入兩次密碼 kmol2020後開啟xming並且輸入xterm&打開xming介面 \n 10.在xming介面下跟著路徑進入到cmsimde然後打開python3 wsgi.py \n 11.輸入網址https://[10.1.1.101(這裡是自家ip]:17443 (記得要將[]拿掉) \n 12.成功後再來是新增ttt檔案的部分 \n 13.一樣在Nav上打入allowExt按下下面視窗中的最後一個檔案就可以找到ttt檔案新增的位置了 \n 操作影片: \n \n 虛擬主機下開啟python3 wsgi.py之模組缺少問題 \n 問題圖片 \n \n 解決方式 \n 在tmp/cd2020pj1之路徑下pip3 install pydrive安裝此模組 \n \n 問題圖片 \n 缺少且無法移除mako此模組 \n \n 解決方式 \n 至路徑/usr/lob/python3/dist-packages sudo pip3 install mako==1.1.3安裝特定版本1.1.3 \n \n 問題圖片 \n 在virtualbox無法匯入ova檔案 \n \n 解決方式 \n (學校)在路徑C:\\Users\\cadlab\\VirtualBox VMs下找到為刪除的之ubnutu將其清除再次匯入即可解決。 \n (家裡)先以圖片中的copy方式複製問題並且貼上後可以找到一組路徑，該組路徑會是在電腦中virtualbox的檔案儲存路徑，並且將舊有的部分刪除。 \n \n', 'tags': '', 'url': '40732321.html'}, {'title': '40723222', 'text': 'IPv6 Ubuntu 設定 打開 Oracle VM VirtualBox 點選 File 下的 Preferences... 點選 Network 打開設定 勾選 Supports IPv6 和 Advertise Default IPv6 Rpute 點選 Settings 裡面的 Network 將 Attached to : 後的選單選取 NAT Network 開啟主機 密碼為 kmol2020 ，開啟 LXTermial 輸入 cd etc  cd apt  cd apt.config.d  sudo vi proxy.conf (密碼為 kmol2020) 點選 i 進行編輯 輸入 Acquire::http::Proxy "http://[2001:288:6004:17::53]:3128"; 案 ESC 並輸入 :wq 進行存檔 輸入 sudo apt update 更新 apt 輸入 ifconfig  sudo apt install net-tools  cd ..  cd ..  cd netplan  sudo vi 00-installer-config.yaml 編輯如下並存檔 輸入 ping6 2001:288:6004:17::254 測試是否能連線 切換 Oracle VM VirtualBox 打開 File 下的 Preferences... 打開 Network 設定 點選 PortForwarding 將 IPv4 和 IPv6 設定如下並儲存 切換回 Ubuntu 輸入 cd   cd tmp  sudo vi oauth_scrum.txt 輸入 google api 密碼並儲存  cd cd2020pj1  sudo vi wsgi.py 將 host 改為 fd17:625c:f037:2:a00:27ff:fef6:9b8a 並儲存  python3 wsgi.py 啟動 即可以打開網址https://[自己ip]:18443/alogin \n', 'tags': '', 'url': '40723222.html'}, {'title': '40723228', 'text': '', 'tags': '', 'url': '40723228.html'}, {'title': 'group3', 'text': '', 'tags': '', 'url': 'group3.html'}, {'title': '40723205', 'text': 'IPV6下伺服器連線設定 \n 在老師倉儲下的downloads開啟w13_ipv6_assignment.txt。 \n 設定IPv6網路，IPv6位址輸入2001:288:6004:17:2020:2::7205(2=乙班、7227=乙班5號)。 \n \n 預設匝道輸入2001:288:6006:17::254。 \n 設定整體系統埠號，將主機IP改為個人IP。 \n 開啟Ubuntu輸入密碼kmol2020。 \n 開啟LXTermial再到cd2020pj1。 \n 要記得git pull檢查有無更新版本，cd docs/cmsimde。 \n 輸入vi wsgi.py，將host改為個人主機IP按i編輯，按Esc輸入:wq存儲。 \n 開啟putty。 \n 設定SSH下的X11。 \n Enable X11 fowarding打勾並在X display location中輸入localhost:0.0。 \n 設定完成後存儲。 \n 輸入帳密kmol2020，打開XLaunch.exe並輸入xterm&啟動。 \n 進入tmp/cd2020pj1/docs/cmsimde，輸入python3 wsgi.py開啟。 \n 網址為[該主機IP]:17443要關閉proxy。 \n 這樣就完成了。 \n \xa0 \n .IPv4 Ubuntu對外連線設定操作 \n 點選檔案-喜好設定-網路-新增一個NAT網路。 \n 編輯NAT網路-連接埠轉送-新增4個新的連接埠轉送埠號。 \n 設定主機IP為127.0.0.1；客體IP為10.0.2.4；主機連接埠為22、19999、17443、18443；客體連接埠為22、19999、7443、8443。 \n 設定-網路-設定主機網路為NAT Network。 \n 啟動，接著輸入密碼kmol2020。 \n 開啟LXTermial，輸入ifconfig之後再輸入sudo apt install net-tools再輸入密碼kmol2020。 \n cd tmp->ls-輸入ping 127.0.0.1測試-cd cd2020pj1-git pull。 \n 打sudo vi wsgi.py編輯內容，按i進行編輯。 \n 近端的host改為10.0.2.4，按Esc並輸入:wq存儲。 \n 開啟leo和cd2020pj1.leo，點選Nav搜尋allowExt。 \n 點開fileuploadfrom，並將第10行新增一個ttt檔，之後存儲並關閉leo。 \n 接著在tmp下新增oauth_scrum.txt，並輸入sudo vi oauth_scrum.txt。按i編輯，隨便輸入即可，接著按Esc並輸入:wq存儲。 \n cd cd2020pj1，並輸入python3 wsgi.py啟動。 \n 網址為https:/127.0.0.1:18443/alogin。 \n 帳號及密碼都為admin，進入後點選fileuploadform，選擇要上傳的ttt檔。 \n 點選download list檢查檔案是否上傳完成。 \n 這樣就完成了。 \n', 'tags': '', 'url': '40723205.html'}, {'title': '40723121', 'text': '', 'tags': '', 'url': '40723121.html'}, {'title': '40723203', 'text': 'week14 \n 設定IPv4遠端控制 \n 下載Xming\xa0 https://sourceforge.net/projects/xming/ \n 搜尋cmd開啟命令提示字元 \n 輸入ipconfig檢查自己的IPv4 \n 開啟虛擬主機板，開啟檔案裏面的喜好設定，點選網路設定埠號 \n 將前3個埠號設定成電腦IP \n 完成後按下啟動，密碼為kmol2020 \n 開啟Xming裡的XLaunch \n 開啟LXTerminal \n 開啟putty,設定成和電腦相同的IP \n 到SSH裡的X11裡，勾選Enable X11 fowarding，並在下方打上localhost:0.0 \n 完成後SAVE並開啟，帳號密碼皆為kmol2020 \n 依序輸入xterm&、cd tmp、cd cd2020pj1、cd docs/cmsimde、vi wsgi.py \n 按i開始編輯，將近端host改成10.0.2.4，輸入:wq儲存 \n 輸入python3 wsgi.py以開啟近端 \n 網址為https://電腦IP:17443 \n 影片: https://youtu.be/UvHS0yvtJbM \n \n FileZilla文件共享 \n 下載FileZilla -\xa0 https://portableapps.com/downloading/?a=FileZillaPortable&n=FileZilla%20Client%20Portable&s=s&p=&d=pa&f=FileZillaPortable_3.48.1.paf.exe \n 開啟虛擬主機，設定埠號(和電腦一樣) \n 開啟putty，設定連接IP \n 在SSH裡的X11，勾選Enable X11 fowarding，並在下方打上localhost:0.0 \n 完成後SAVE並開啟，帳號密碼皆為kmol2020 \n 開啟FileZilla \n 點選檔案裡面的站台管理員，選擇新增站台個人主機IP \n 將右方選項改為 SFTP-SSH \n 下方輸入電腦IP和埠號22 \n 登入型式更改為詢問密碼 \n 使用者命名輸入kmol2020 \n 完成後點選連線 \n 密碼為kmol2020 \n', 'tags': '', 'url': '40723203.html'}, {'title': 'group4', 'text': '', 'tags': '', 'url': 'group4.html'}, {'title': '40723245', 'text': '', 'tags': '', 'url': '40723245.html'}, {'title': '40723210', 'text': 'IPv6 Ubuntu 對外連線設定(請在學校使用) \n 必須要先了解 Linux 的輸入法，以及 vi與vim 的指令 1.在VirtualBox先勾選2個IPv6選項，主機網路為NAT Network 2.主機密碼:kmol2020，開啟LXTermial，輸入cd /etc sudo為 使用特殊的權限執行程式。vi為編輯內容 3.cd apt > cd apt.conf.d >\xa0 sudo vi proxy.conf\xa0 4.密碼為kmol2020，按i來編輯，輸入proxy設定內容如下 \n Acquire::http::Proxy "http://[2001:288:6004:17::53]:3128"; \n 5.按ESC並輸入:wq來儲存，sudo apt update來更新apt ifconfig為查看網卡信息的各項說明 6.ifconfig >\xa0sudo apt install net-tools，cd /etc/netplan 7.sudo vi 00-installer-config.yaml，編輯成如下內容 \xa0 #間格和縮牌都要一樣 \n network:\n    ethernets:\n        enp0s3:\n           dhcp4: true\n           dhcp6: true\n           nameservers:\n               addresses:\n                  - 2001:b000:168::11  \n  version: 2 \n 8.輸入sudo netplan apply來更新，再輸入ping6 2001:288:6004:17::254來測試連線 9.在 VirtualBox 新增整體系統的IPv6埠號，如影片中的各4個埠號 10.輸入ifconfig來查詢IPv6的ip，fd17:625c:f037..... (虛擬主機的ipv6) 11.進入cd2020pj1 > git config --global --add http.proxy [2001:288:6004:17::53]:3128 12.git pull 更新內容，再tmp下 sudo vi\xa0 oauth_scrum.txt來新增檔案 13.sudo vi wsgi.py，將近端的host改為:: ，輸入python3 wsgi.py 14.網址為https://[::1]:18443/alogin ，在開啟cd2020pj1.leo 15.再Nav搜尋allowExt(後來有更動過位子)，新增一個\'ttt\'檔，重開就可上傳.ttt檔 \n 影片連結: https://youtu.be/2BFxNK5TtEk \n \n \n IPv4 Ubuntu 對外連線設定(可在家使用) \n 1.新增整體系統的埠號，如下圖所輸入，主機網路為NAT Network 2.設定完後啟動，密碼kmol2020，開啟LXTermial 3.輸入ifconfig >\xa0sudo apt install net-tools，密碼kmol2020 4.輸入ping 127.0.0.1來測試，進入cd2020pj1 >\xa0git pull 5.sudo vi wsgi.py編輯內容，按 i 編輯，近端的host改為10.0.2.4 6.按ESC並輸入:wq來儲存，開啟cd2020pj1.leo，在Nav搜尋allowExt 7.直接新增一個ttt檔，然後在tmp下 sudo vi\xa0 oauth_scrum.txt 8.內容暫時可以隨便打，再輸入python3 wsgi.py來啟動遠端 9.網址為https:/127.0.0.1:18443/alogin，這樣就可以連線了 \n 影片連結: https://youtu.be/HSmI0PzFVFs \n \n \n IPv6\xa0 遠端控制伺服(請在學校使用) \n 必須先完成IPv6 Ubuntu 對外連線設定，才可以開始測試IPv6遠端控制 \n 1.打開老師的 ipv6_assignment.txt ，這裡有詳細的ipv6設置說明 2.照著上面的說明，來設定網路的ipv6，7210為乙班10號2為乙班 3.再來設定整體系統的埠號，把Host改為自己的ip，啟動Ubuntn主機 4.進入cd2020pj1，先git pull看看有沒有新版本，在進入docs > cmsimde 5.使用vi wsgi.py來編輯，將host改為自己主機的ip，按i編輯，按esc輸入:wq儲存 6.另一台電腦開啟putty，輸入想遠端要連線的ip \xa0 (記得被連線的主機要關防火牆) 7.都設定好之後，save再open就可以連到該主機，帳號密碼為kmol2020 8.使用XLaunch(為 Xming 軟件)來開啟，直接遠端控制開啟python3 wsgi.py 9.網址是該控制主機的ip加上括號和17443，必須要關掉proxy才可以通 \n 影片連結: https://youtu.be/5NTALa4xvEc \n \n \n IPv4 遠端控制伺服(可在家裡使用) \n 1.在系統搜尋cmd來開啟命令窗，輸入ipconfig來查ipv4 2.設定整體系統的埠號，改為電腦的ipv4，啟動Ubuntn主機 3.另一台電腦開啟LXTermial、putty，輸入要連線的ip \xa0 (要關防火牆) 4.再設定SSH下的X11，save再Open就可以連到該ip的主機 5.帳號密碼為kmol2020，輸入xterm& ，使用ctrl+滑鼠右鍵來放大視窗 6.進入cd2020pj1，先git pull看看有沒有新版本，在進入docs > cmsimde 7.輸入vi wsgi.py，按 i 編輯，將host改為10.0.2.4，按ESC並輸入:wq來儲存 8.輸入python3 wsgi.py來啟動，網址就是該控制主機的ip加上17443 \n 影片連結: https://youtu.be/ZyKg5drxQXA \n \n \n FileZilla 虛擬主機文件共享 \n 1.下載 FileZilla \xa0 ，將下載好的檔案解壓縮，放入隨身系統 2.啟動Ubuntu主機，確認整體系統的埠號，開啟putty 3.設定ip來連接，跟之前一樣得設定，帳密為kmol2020 4.打開FileZilla，新增一個站台::1，設定SFTP - SSH以及如影片內容 5.密碼koml2020，完成就可以使用上傳下載來編輯比較方便 \n 影片連結: https://youtu.be/Cq5Xv94dYrA \n \n \n 虛擬主機問題 \n 目前因為老師將cd2020pj1改版了，所以照著之前的操作，就會出現錯誤，幾乎都是在開啟python3 wsgi.py的錯誤。 \n 1.使用allowExt搜尋位子變更，一樣是在Nav下搜尋，可以在最後一行找到。 \n \n 2.輸入ping6 2001:288:6004:17::254出現錯誤 \n 要確保/etc/netplan >\xa0sudo vi 00-installer-config.yaml，編輯的內容要完全正確 \xa0#間格和縮牌都要一樣 ，還要記的輸入 sudo netplan apply來更新 \n \n 3.在使用git pull更新cd2020pj1時出現衝突 \n 直接輸入git checkout .來捨棄目前的改版，然後再git pull一次就可以了 \n \n \n 4.使用python3 wsgi.py顯示找不到資料的錯誤 \n 要確定好在tmp下輸入 sudo vi\xa0 oauth_scrum.txt(內容是自己google api 的密碼)。 #注意名子不能打錯，有很多人都打錯 \n \n 5.開啟python3 wsgi.py缺少模組\'pydrive\' \n 直接輸入pip3 install pydrive，來安裝這個缺少的模 組(沒有權限的話就 使用sudo pip3 install pydrive) \n \n 6.編輯sudo vi\xa0wsgi.py設定錯誤 \n 在host=\'10.0.2.4\'的ip設定錯誤(是客體的ip)，或是有不小心刪除某些字，也有可能是多打了幾個字，也要檢查 VirtualBox 整體的埠號是否輸入錯誤 \n \n 7. 在VirtualBox無法匯入 老師用好的 Ubuntu.ova檔案 \n 在電腦的使用者下 C:\\Users\\"使用者名稱"\\VirtualBox VMs，資料夾內將重複名子的檔案刪除就可以了 \n \n 8.遠端連線時出現Mako error的問題 \n 因為虛擬主機的mako版本是舊的，所以要輸入pip3 install mako==1.1.3來更新版本，如果是在自己的隨身系統下，就直接輸入pip install mako來安裝模組就行了 \n \n 9.使用python3 wsgi.py時，出現key的錯誤 \n 在tmp下的oauth_scrum.txt，內容必須至少要有兩行，使用sudo vi\xa0oauth_scrum.txt來進行編輯，只有一段的話會出現錯誤 \n', 'tags': '', 'url': '40723210.html'}, {'title': '40723238', 'text': 'ipv6遠端控制伺服 \n 1.將控制台設定跟 老師 一樣 \n 2.將虛擬主機全域埠號改成跟影片一樣 \n 3.啟動ubuntu並開啟xterminal然後新cd tmp/cd2020pj1打git pull看有無更新 \n 4.cd docs/cmsimde打sudo vi wsgi.py並打密碼kmol2020將host改成自己ipv6位址 \n 5.打開lxlaunch跟putty，putty要名稱設定跟自己的位址一樣 \n 6.open後輸入帳密kmol2020打xterm&打開小白窗 \n 7.cd tmp/cd2020pj1/docs/cmsimde打python3 wsgi.py \n 8.網址是https://[自己的ipv6位址]:17443 \n \n', 'tags': '', 'url': '40723238.html'}]};