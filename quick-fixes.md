---
layout: page
title: Quick-Fixes
weight: 3
---
## Quick-Fixes
------------------

### 1. Cannot Login
When you go to `http://hda`, you cannot login. This may be due to one of two reasons

> * You may be using your Amahi web site credentials. You have to use the username/password you created while installing. In the case of the Express CD, the password is fixed to admin/admin.
> * You may be using different capitalization. Use the same exact spelling as when you created the user at installation time. Linux is, in general, case-sensitive

### 2. Clients Cannot Connnect to the Dashboard

A common issue is your client computer not being able to connect to `http://hda`.
> * This may be because your client device is not using your HDA for DNS.
> * To ensure that the client(s) use your HDA for DNS, the simplest way is to disable DHCP in your network and reboot your clients. This will allow your HDA to be the sole DHCP server in it and everything should "just work."

If you continue having networking issues, try the 
<a  href="troubleshooter.html" title="Interactive Troubleshooter">Interactive Troubleshooter</a> above.

Check the [support options](support.html) for more help.
