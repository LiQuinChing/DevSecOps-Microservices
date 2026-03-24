<h2>:mag: Vulnerabilities of <code>local-userservice:secure-v1</code></h2>

<details open="true"><summary>:package: Image Reference</strong> <code>local-userservice:secure-v1</code></summary>
<table>
<tr><td>digest</td><td><code>sha256:2880c2643ddbcf48425ebef00660486bef7e246f25020ed3cfe7a53a9a5c6a75</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 2" src="https://img.shields.io/badge/critical-2-8b1924"/> <img alt="high: 11" src="https://img.shields.io/badge/high-11-e25d68"/> <img alt="medium: 10" src="https://img.shields.io/badge/medium-10-fbb552"/> <img alt="low: 8" src="https://img.shields.io/badge/low-8-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>167 MB</td></tr>
<tr><td>packages</td><td>157</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>org.springframework.security/spring-security-core</strong> <code>6.4.3</code> (maven)</summary>

<small><code>pkg:maven/org.springframework.security/spring-security-core@6.4.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-41232?s=github&n=spring-security-core&ns=org.springframework.security&t=maven&vr=%3E%3D6.4.0%2C%3C6.4.6"><img alt="critical 9.1: CVE--2025--41232" src="https://img.shields.io/badge/CVE--2025--41232-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Protection Mechanism Failure</i>

<table>
<tr><td>Affected range</td><td><code>>=6.4.0<br/><6.4.6</code></td></tr>
<tr><td>Fixed version</td><td><code>6.4.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.351%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>57th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Spring Security Aspects may not correctly locate method security annotations on private methods. This can cause an authorization bypass.

Your application may be affected by this if the following are true:

  *  You are using @EnableMethodSecurity(mode=ASPECTJ) and spring-security-aspects, and
  *  You have Spring Security method annotations on a private method
In that case, the target method may be able to be invoked without proper authorization.

You are not affected if:

  *  You are not using @EnableMethodSecurity(mode=ASPECTJ) or spring-security-aspects, or
  *  You have no Spring Security-annotated private methods

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-41248?s=github&n=spring-security-core&ns=org.springframework.security&t=maven&vr=%3E%3D6.4.0%2C%3C6.4.10"><img alt="high 7.5: CVE--2025--41248" src="https://img.shields.io/badge/CVE--2025--41248-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Authentication Bypass by Alternate Name</i>

<table>
<tr><td>Affected range</td><td><code>>=6.4.0<br/><6.4.10</code></td></tr>
<tr><td>Fixed version</td><td><code>6.4.10</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.057%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Spring Security annotation detection mechanism may not correctly resolve annotations on methods within type hierarchies with a parameterized super type with unbounded generics. This can be an issue when using @PreAuthorize and other method security annotations, resulting in an authorization bypass.

Your application may be affected by this if you are using Spring Security's @EnableMethodSecurity feature.

You are not affected by this if you are not using @EnableMethodSecurity or if you do not use security annotations on methods in generic superclasses or generic interfaces.

This CVE is published in conjunction with  CVE-2025-41249 https://spring.io/security/cve-2025-41249 .

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22223?s=github&n=spring-security-core&ns=org.springframework.security&t=maven&vr=%3E%3D6.4.0%2C%3C6.4.4"><img alt="medium 5.3: CVE--2025--22223" src="https://img.shields.io/badge/CVE--2025--22223-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Authentication Bypass by Spoofing</i>

<table>
<tr><td>Affected range</td><td><code>>=6.4.0<br/><6.4.4</code></td></tr>
<tr><td>Fixed version</td><td><code>6.4.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.039%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Spring Security 6.4.0 - 6.4.3 may not correctly locate method security annotations on parameterized types or methods. This may cause an authorization bypass. 

You are not affected if you are not using @EnableMethodSecurity, or you do not have method security annotations on parameterized types or methods, or all method security annotations are attached to target methods

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>org.springframework.security/spring-security-web</strong> <code>6.4.3</code> (maven)</summary>

<small><code>pkg:maven/org.springframework.security/spring-security-web@6.4.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-22732?s=github&n=spring-security-web&ns=org.springframework.security&t=maven&vr=%3E%3D6.4.0%2C%3C%3D6.4.13"><img alt="critical 9.1: CVE--2026--22732" src="https://img.shields.io/badge/CVE--2026--22732-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Direct Request ('Forced Browsing')</i>

<table>
<tr><td>Affected range</td><td><code>>=6.4.0<br/><=6.4.13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When applications specify HTTP response headers for servlet applications using Spring Security, there is the possibility that the HTTP Headers will not be written. 
This issue affects Spring Security: from 5.7.0 through 5.7.21, from 5.8.0 through 5.8.23, from 6.3.0 through 6.3.14, from 6.4.0 through 6.4.14, from 6.5.0 through 6.5.8, from 7.0.0 through 7.0.3.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 6" src="https://img.shields.io/badge/H-6-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 5" src="https://img.shields.io/badge/L-5-fce1a9"/> <!-- unspecified: 0 --><strong>org.apache.tomcat.embed/tomcat-embed-core</strong> <code>10.1.36</code> (maven)</summary>

<small><code>pkg:maven/org.apache.tomcat.embed/tomcat-embed-core@10.1.36</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-48988?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C%3D10.1.41"><img alt="high 8.7: CVE--2025--48988" src="https://img.shields.io/badge/CVE--2025--48988-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><=10.1.41</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.42</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.260%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Allocation of Resources Without Limits or Throttling vulnerability in Apache Tomcat.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.7, from 10.1.0-M1 through 10.1.41, from 9.0.0.M1 through 9.0.105. The following versions were EOL at the time the CVE was created but are known to be affected: 8.5.0 though 8.5.100. Other, older, EOL versions may also be affected.

Users are recommended to upgrade to version 11.0.8, 10.1.42 or 9.0.106, which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-55752?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C10.1.45"><img alt="high 7.7: CVE--2025--55752" src="https://img.shields.io/badge/CVE--2025--55752-lightgrey?label=high%207.7&labelColor=e25d68"/></a> <i>Relative Path Traversal</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><10.1.45</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.45</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:L/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.408%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>61st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The fix for bug 60013 introduced a regression where the rewritten URL was normalized before it was decoded. This introduced the possibility that, for rewrite rules that rewrite query parameters to the URL, an attacker could manipulate the request URI to bypass security constraints including the protection for /WEB-INF/ and /META-INF/. If PUT requests were also enabled then malicious files could be uploaded leading to remote code execution. PUT requests are normally limited to trusted users and it is considered unlikely that PUT requests would be enabled in conjunction with a rewrite that manipulated the URI.



This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.10, from 10.1.0-M1 through 10.1.44, from 9.0.0.M11 through 9.0.108.

The following versions were EOL at the time the CVE was created but are  known to be affected: 8.5.6 though 8.5.100. Other, older, EOL versions may also be affected. Users are recommended to upgrade to version 11.0.11 or later, 10.1.45 or later or 9.0.109 or later, which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-24734?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M7%2C%3C10.1.52"><img alt="high 7.5: CVE--2026--24734" src="https://img.shields.io/badge/CVE--2026--24734-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M7<br/><10.1.52</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.52</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.098%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Improper Input Validation vulnerability in Apache Tomcat Native, Apache Tomcat.

When using an OCSP responder, Tomcat Native (and Tomcat's FFM port of the Tomcat Native code) did not complete verification or freshness checks on the OCSP response which could allow certificate revocation to be bypassed.

This issue affects Apache Tomcat Native:  from 1.3.0 through 1.3.4, from 2.0.0 through 2.0.11; Apache Tomcat: from 11.0.0-M1 through 11.0.17, from 10.1.0-M7 through 10.1.51, from 9.0.83 through 9.0.114.


The following versions were EOL at the time the CVE was created but are 
known to be affected: from 1.1.23 through 1.1.34, from 1.2.0 through 1.2.39. Older EOL versions are not affected.

Apache Tomcat Native users are recommended to upgrade to versions 1.3.5 or later or 2.0.12 or later, which fix the issue.

Apache Tomcat users are recommended to upgrade to versions 11.0.18 or later, 10.1.52 or later or 9.0.115 or later which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-53506?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C10.1.43"><img alt="high 7.5: CVE--2025--53506" src="https://img.shields.io/badge/CVE--2025--53506-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><10.1.43</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.43</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.242%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Uncontrolled Resource Consumption vulnerability in Apache Tomcat if an HTTP/2 client did not acknowledge the initial settings frame that reduces the maximum permitted concurrent streams.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.8, from 10.1.0-M1 through 10.1.42, from 9.0.0.M1 through 9.0.106. The following versions were EOL at the time the CVE was created but are known to be affected: 8.5.0 through 8.5.100.

Users are recommended to upgrade to version 11.0.9, 10.1.43 or 9.0.107, which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-52520?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C10.1.43"><img alt="high 7.5: CVE--2025--52520" src="https://img.shields.io/badge/CVE--2025--52520-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Integer Overflow or Wraparound</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><10.1.43</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.43</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.132%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

For some unlikely configurations of multipart upload, an Integer Overflow vulnerability in Apache Tomcat could lead to a DoS via bypassing of size limits.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.8, from 10.1.0-M1 through 10.1.42, from 9.0.0.M1 through 9.0.106. The following versions were EOL at the time the CVE was created but are known to be affected: 8.5.0 through 8.5.100. Other, older, EOL versions may also be affected.

Users are recommended to upgrade to version 11.0.9, 10.1.43 or 9.0.107, which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-48989?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C10.1.44"><img alt="high 7.5: CVE--2025--48989" src="https://img.shields.io/badge/CVE--2025--48989-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Resource Shutdown or Release</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><10.1.44</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.44</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.241%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Improper Resource Shutdown or Release vulnerability in Apache Tomcat made Tomcat vulnerable to the made you reset attack.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.9, from 10.1.0-M1 through 10.1.43 and from 9.0.0.M1 through 9.0.107. Older, EOL versions may also be affected.

Users are recommended to upgrade to one of versions 11.0.10, 10.1.44 or 9.0.108 which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-31650?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.10%2C%3C10.1.40"><img alt="medium 6.6: CVE--2025--31650" src="https://img.shields.io/badge/CVE--2025--31650-lightgrey?label=medium%206.6&labelColor=fbb552"/></a> <i>Incomplete Cleanup</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.10<br/><10.1.40</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.40</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.6</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:U</code></td></tr>
<tr><td>EPSS Score</td><td><code>20.282%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>95th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Improper Input Validation vulnerability in Apache Tomcat. Incorrect error handling for some invalid HTTP priority headers resulted in incomplete clean-up of the failed request which created a memory leak. A large number of such requests could trigger an OutOfMemoryException resulting in a denial of service.

This issue affects Apache Tomcat: from 9.0.76 through 9.0.102, from 10.1.10 through 10.1.39, from 11.0.0-M2 through 11.0.5. The following versions were EOL at the time the CVE was created but are known to be affected: 8.5.90 though 8.5.100.

Users are recommended to upgrade to version 9.0.104, 10.1.40 or 11.0.6 which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-66614?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C10.1.50"><img alt="medium 6.3: CVE--2025--66614" src="https://img.shields.io/badge/CVE--2025--66614-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><10.1.50</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.49</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:L/VI:L/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Improper Input Validation vulnerability.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.14, from 10.1.0-M1 through 10.1.49, from 9.0.0-M1 through 9.0.112.

The following versions were EOL at the time the CVE was created but are known to be affected: 8.5.0 through 8.5.100. Older EOL versions are not affected. Tomcat did not validate that the host name provided via the SNI extension was the same as the host name provided in the HTTP host header field. If Tomcat was configured with more than one virtual host and the TLS configuration for one of those hosts did not require client certificate authentication but another one did, it was possible for a client to bypass the client certificate authentication by sending different host names in the SNI extension and the HTTP host header field.

The vulnerability only applies if client certificate authentication is only enforced at the Connector. It does not apply if client certificate authentication is enforced at the web application.

Users are recommended to upgrade to version 11.0.15 or later, 10.1.50 or later or 9.0.113 or later, which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-49125?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C%3D10.1.41"><img alt="medium 6.3: CVE--2025--49125" src="https://img.shields.io/badge/CVE--2025--49125-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Authentication Bypass Using an Alternate Path or Channel</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><=10.1.41</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.42</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:L/VI:L/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.151%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Authentication Bypass Using an Alternate Path or Channel vulnerability in Apache Tomcat.  When using PreResources or PostResources mounted other than at the root of the web application, it was possible to access those resources via an unexpected path. That path was likely not to be protected by the same security constraints as the expected path, allowing those security constraints to be bypassed.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.7, from 10.1.0-M1 through 10.1.41, from 9.0.0.M1 through 9.0.105. The following versions were EOL at the time the CVE was created but are known to be affected: 8.5.0 through 8.5.100. Other, older, EOL versions may also be affected.

Users are recommended to upgrade to version 11.0.8, 10.1.42 or 9.0.106, which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-49124?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0%2C%3C10.1.42"><img alt="medium 4.8: CVE--2025--49124" src="https://img.shields.io/badge/CVE--2025--49124-lightgrey?label=medium%204.8&labelColor=fbb552"/></a> <i>Untrusted Search Path</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0<br/><10.1.42</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.42</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:L/AC:L/AT:P/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:U</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.062%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Untrusted Search Path vulnerability in Apache Tomcat installer for Windows. During installation, the Tomcat installer for Windows used icacls.exe without specifying a full path.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.7, from 10.1.0 through 10.1.41, from 9.0.23 through 9.0.105.

Users are recommended to upgrade to version 11.0.8, 10.1.42 or 9.0.106, which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-24733?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C10.1.50"><img alt="low 2.7: CVE--2026--24733" src="https://img.shields.io/badge/CVE--2026--24733-lightgrey?label=low%202.7&labelColor=fce1a9"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><10.1.50</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.49</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N/E:U</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.160%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Improper Input Validation vulnerability in Apache Tomcat.

Tomcat did not limit HTTP/0.9 requests to the GET method. If a security constraint was configured to allow HEAD requests to a URI but deny GET requests, the user could bypass that constraint on GET requests by sending a (specification invalid) HEAD request using HTTP/0.9.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.14, from 10.1.0-M1 through 10.1.49, from 9.0.0.M1 through 9.0.112.


Older, EOL versions are also affected.

Users are recommended to upgrade to version 11.0.15 or later, 10.1.50 or later or 9.0.113 or later, which fixes the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-31651?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.10%2C%3C10.1.40"><img alt="low 2.7: CVE--2025--31651" src="https://img.shields.io/badge/CVE--2025--31651-lightgrey?label=low%202.7&labelColor=fce1a9"/></a> <i>Improper Encoding or Escaping of Output</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.10<br/><10.1.40</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.40</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:L/VA:N/SC:N/SI:N/SA:N/E:U</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.370%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>59th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Improper Neutralization of Escape, Meta, or Control Sequences vulnerability in Apache Tomcat. For a subset of unlikely rewrite rule configurations, it was possible for a specially crafted request to bypass some rewrite rules. If those rewrite rules effectively enforced security constraints, those constraints could be bypassed.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.5, from 10.1.0-M1 through 10.1.39, from 9.0.0.M1 through 9.0.102. The following versions were EOL at the time the CVE was created but are known to be affected: 8.5.0 though 8.5.100. Other, older, EOL versions may also be affected.

Users are recommended to upgrade to version 9.0.104, 10.1.40 or 11.0.6, which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61795?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C10.1.47"><img alt="low 2.3: CVE--2025--61795" src="https://img.shields.io/badge/CVE--2025--61795-lightgrey?label=low%202.3&labelColor=fce1a9"/></a> <i>Improper Resource Shutdown or Release</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><10.1.47</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.47</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:L/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:U</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.168%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If an error occurred (including exceeding limits) during the processing of a multipart upload, temporary copies of the uploaded parts written to disc were not cleaned up immediately but left for the garbage collection process to delete. Depending on JVM settings, application memory usage and application load, it was possible that space for the temporary copies of uploaded parts would be filled faster than GC cleared it, leading to a DoS.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.11, from 10.1.0-M1 through 10.1.46, from 9.0.0.M1 through 9.0.109.

The following versions were EOL at the time the CVE was created but are 
known to be affected: 8.5.0 though 8.5.100. Other, older, EOL versions may also be affected.
Users are recommended to upgrade to version 11.0.12 or later, 10.1.47 or later or 9.0.110 or later which fixes the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-55754?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C10.1.45"><img alt="low 2.1: CVE--2025--55754" src="https://img.shields.io/badge/CVE--2025--55754-lightgrey?label=low%202.1&labelColor=fce1a9"/></a> <i>Improper Neutralization of Escape, Meta, or Control Sequences</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><10.1.45</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.45</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:A/VC:L/VI:L/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Tomcat did not escape ANSI escape sequences in log messages. If Tomcat was running in a console on a Windows operating system, and the console supported ANSI escape sequences, it was possible for an attacker to use a specially crafted URL to inject ANSI escape sequences to manipulate the console and the clipboard and attempt to trick an administrator into running an attacker controlled command. While no attack vector was found, it may have been possible to mount this attack on other operating systems.



This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.10, from 10.1.0-M1 through 10.1.44, from 9.0.40 through 9.0.108.

The following versions were EOL at the time the CVE was created but are 
known to be affected: 8.5.60 though 8.5.100. Other, older, EOL versions may also be affected.
Users are recommended to upgrade to version 11.0.11 or later, 10.1.45 or later or 9.0.109 or later, which fix the issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-46701?s=github&n=tomcat-embed-core&ns=org.apache.tomcat.embed&t=maven&vr=%3E%3D10.1.0-M1%2C%3C10.1.41"><img alt="low 1.7: CVE--2025--46701" src="https://img.shields.io/badge/CVE--2025--46701-lightgrey?label=low%201.7&labelColor=fce1a9"/></a> <i>Improper Handling of Case Sensitivity</i>

<table>
<tr><td>Affected range</td><td><code>>=10.1.0-M1<br/><10.1.41</code></td></tr>
<tr><td>Fixed version</td><td><code>10.1.41</code></td></tr>
<tr><td>CVSS Score</td><td><code>1.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:L/VI:L/VA:N/SC:N/SI:N/SA:N/E:U/U:Clear</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.047%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Improper Handling of Case Sensitivity vulnerability in Apache Tomcat's GCI servlet allows security constraint bypass of security constraints that apply to the pathInfo component of a URI mapped to the CGI servlet.

This issue affects Apache Tomcat: from 11.0.0-M1 through 11.0.6, from 10.1.0-M1 through 10.1.40, from 9.0.0.M1 through 9.0.104. The following versions were EOL at the time the CVE was created but are known to be affected: 8.5.0 though 8.5.100. Other, older, EOL versions may also be affected.

Users are recommended to upgrade to version 11.0.7, 10.1.41 or 9.0.105, which fixes the issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>org.springframework.boot/spring-boot</strong> <code>3.4.3</code> (maven)</summary>

<small><code>pkg:maven/org.springframework.boot/spring-boot@3.4.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-22235?s=github&n=spring-boot&ns=org.springframework.boot&t=maven&vr=%3E%3D3.4.0%2C%3C%3D3.4.4"><img alt="high 7.3: CVE--2025--22235" src="https://img.shields.io/badge/CVE--2025--22235-lightgrey?label=high%207.3&labelColor=e25d68"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>>=3.4.0<br/><=3.4.4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.4.5</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.390%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>60th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

EndpointRequest.to() creates a matcher for null/** if the actuator endpoint, for which the EndpointRequest has been created, is disabled or not exposed.

Your application may be affected by this if all the following conditions are met:

  *  You use Spring Security
  *  EndpointRequest.to() has been used in a Spring Security chain configuration
  *  The endpoint which EndpointRequest references is disabled or not exposed via web
  *  Your application handles requests to /null and this path needs protection


You are not affected if any of the following is true:

  *  You don't use Spring Security
  *  You don't use EndpointRequest.to()
  *  The endpoint which EndpointRequest.to() refers to is enabled and is exposed
  *  Your application does not handle requests to /null or this path does not need protection

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>org.springframework/spring-core</strong> <code>6.2.3</code> (maven)</summary>

<small><code>pkg:maven/org.springframework/spring-core@6.2.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-41249?s=github&n=spring-core&ns=org.springframework&t=maven&vr=%3E%3D6.2.0%2C%3C%3D6.2.10"><img alt="high 7.5: CVE--2025--41249" src="https://img.shields.io/badge/CVE--2025--41249-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Authorization</i>

<table>
<tr><td>Affected range</td><td><code>>=6.2.0<br/><=6.2.10</code></td></tr>
<tr><td>Fixed version</td><td><code>6.2.11</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.064%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Spring Framework annotation detection mechanism may not correctly resolve annotations on methods within type hierarchies with a parameterized super type with unbounded generics. This can be an issue if such annotations are used for authorization decisions.

Your application may be affected by this if you are using Spring Security's @EnableMethodSecurity feature.

You are not affected by this if you are not using @EnableMethodSecurity or if you do not use security annotations on methods in generic superclasses or generic interfaces.

This CVE is published in conjunction with  CVE-2025-41248 https://spring.io/security/cve-2025-41248 .

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>org.springframework.security/spring-security-crypto</strong> <code>6.4.3</code> (maven)</summary>

<small><code>pkg:maven/org.springframework.security/spring-security-crypto@6.4.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-22228?s=github&n=spring-security-crypto&ns=org.springframework.security&t=maven&vr=%3E%3D6.4.0%2C%3C6.4.4"><img alt="high 7.4: CVE--2025--22228" src="https://img.shields.io/badge/CVE--2025--22228-lightgrey?label=high%207.4&labelColor=e25d68"/></a> <i>Improper Authentication</i>

<table>
<tr><td>Affected range</td><td><code>>=6.4.0<br/><6.4.4</code></td></tr>
<tr><td>Fixed version</td><td><code>6.4.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.4</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

BCryptPasswordEncoder.matches(CharSequence,String) will incorrectly return true for passwords larger than 72 characters as long as the first 72 characters are the same.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>com.fasterxml.jackson.core/jackson-core</strong> <code>2.18.2</code> (maven)</summary>

<small><code>pkg:maven/com.fasterxml.jackson.core/jackson-core@2.18.2</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-72hv-8253-57qq?s=github&n=jackson-core&ns=com.fasterxml.jackson.core&t=maven&vr=%3E%3D2.0.0%2C%3C%3D2.18.5"><img alt="high 8.7: GHSA--72hv--8253--57qq" src="https://img.shields.io/badge/GHSA--72hv--8253--57qq-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>>=2.0.0<br/><=2.18.5</code></td></tr>
<tr><td>Fixed version</td><td><code>2.18.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary
The non-blocking (async) JSON parser in `jackson-core` bypasses the `maxNumberLength` constraint (default: 1000 characters) defined in `StreamReadConstraints`. This allows an attacker to send JSON with arbitrarily long numbers through the async parser API, leading to excessive memory allocation and potential CPU exhaustion, resulting in a Denial of Service (DoS).

The standard synchronous parser correctly enforces this limit, but the async parser fails to do so, creating an inconsistent enforcement policy.

### Details
The root cause is that the async parsing path in `NonBlockingUtf8JsonParserBase` (and related classes) does not call the methods responsible for number length validation.

- The number parsing methods (e.g., `_finishNumberIntegralPart`) accumulate digits into the `TextBuffer` without any length checks.
- After parsing, they call `_valueComplete()`, which finalizes the token but does **not** call `resetInt()` or `resetFloat()`.
- The `resetInt()`/`resetFloat()` methods in `ParserBase` are where the `validateIntegerLength()` and `validateFPLength()` checks are performed.
- Because this validation step is skipped, the `maxNumberLength` constraint is never enforced in the async code path.

### PoC
The following JUnit 5 test demonstrates the vulnerability. It shows that the async parser accepts a 5,000-digit number, whereas the limit should be 1,000.

```java
package tools.jackson.core.unittest.dos;

import java.nio.charset.StandardCharsets;

import org.junit.jupiter.api.Test;

import tools.jackson.core.*;
import tools.jackson.core.exc.StreamConstraintsException;
import tools.jackson.core.json.JsonFactory;
import tools.jackson.core.json.async.NonBlockingByteArrayJsonParser;

import static org.junit.jupiter.api.Assertions.*;

/**
 * POC: Number Length Constraint Bypass in Non-Blocking (Async) JSON Parsers
 *
 * Authors: sprabhav7, rohan-repos
 * 
 * maxNumberLength default = 1000 characters (digits).
 * A number with more than 1000 digits should be rejected by any parser.
 *
 * BUG: The async parser never calls resetInt()/resetFloat() which is where
 * validateIntegerLength()/validateFPLength() lives. Instead it calls
 * _valueComplete() which skips all number length validation.
 *
 * CWE-770: Allocation of Resources Without Limits or Throttling
 */
class AsyncParserNumberLengthBypassTest {

    private static final int MAX_NUMBER_LENGTH = 1000;
    private static final int TEST_NUMBER_LENGTH = 5000;

    private final JsonFactory factory = new JsonFactory();

    // CONTROL: Sync parser correctly rejects a number exceeding maxNumberLength
    @Test
    void syncParserRejectsLongNumber() throws Exception {
        byte[] payload = buildPayloadWithLongInteger(TEST_NUMBER_LENGTH);
		
		// Output to console
        System.out.println("[SYNC] Parsing " + TEST_NUMBER_LENGTH + "-digit number (limit: " + MAX_NUMBER_LENGTH + ")");
        try {
            try (JsonParser p = factory.createParser(ObjectReadContext.empty(), payload)) {
                while (p.nextToken() != null) {
                    if (p.currentToken() == JsonToken.VALUE_NUMBER_INT) {
                        System.out.println("[SYNC] Accepted number with " + p.getText().length() + " digits — UNEXPECTED");
                    }
                }
            }
            fail("Sync parser must reject a " + TEST_NUMBER_LENGTH + "-digit number");
        } catch (StreamConstraintsException e) {
            System.out.println("[SYNC] Rejected with StreamConstraintsException: " + e.getMessage());
        }
    }

    // VULNERABILITY: Async parser accepts the SAME number that sync rejects
    @Test
    void asyncParserAcceptsLongNumber() throws Exception {
        byte[] payload = buildPayloadWithLongInteger(TEST_NUMBER_LENGTH);

        NonBlockingByteArrayJsonParser p =
            (NonBlockingByteArrayJsonParser) factory.createNonBlockingByteArrayParser(ObjectReadContext.empty());
        p.feedInput(payload, 0, payload.length);
        p.endOfInput();

        boolean foundNumber = false;
        try {
            while (p.nextToken() != null) {
                if (p.currentToken() == JsonToken.VALUE_NUMBER_INT) {
                    foundNumber = true;
                    String numberText = p.getText();
                    assertEquals(TEST_NUMBER_LENGTH, numberText.length(),
                        "Async parser silently accepted all " + TEST_NUMBER_LENGTH + " digits");
                }
            }
            // Output to console
            System.out.println("[ASYNC INT] Accepted number with " + TEST_NUMBER_LENGTH + " digits — BUG CONFIRMED");
            assertTrue(foundNumber, "Parser should have produced a VALUE_NUMBER_INT token");
        } catch (StreamConstraintsException e) {
            fail("Bug is fixed — async parser now correctly rejects long numbers: " + e.getMessage());
        }
        p.close();
    }

    private byte[] buildPayloadWithLongInteger(int numDigits) {
        StringBuilder sb = new StringBuilder(numDigits + 10);
        sb.append("{\"v\":");
        for (int i = 0; i < numDigits; i++) {
            sb.append((char) ('1' + (i % 9)));
        }
        sb.append('}');
        return sb.toString().getBytes(StandardCharsets.UTF_8);
    }
}

```


### Impact
A malicious actor can send a JSON document with an arbitrarily long number to an application using the async parser (e.g., in a Spring WebFlux or other reactive application). This can cause:
1.  **Memory Exhaustion:** Unbounded allocation of memory in the `TextBuffer` to store the number's digits, leading to an `OutOfMemoryError`.
2.  **CPU Exhaustion:** If the application subsequently calls `getBigIntegerValue()` or `getDecimalValue()`, the JVM can be tied up in O(n^2) `BigInteger` parsing operations, leading to a CPU-based DoS.

### Suggested Remediation

The async parsing path should be updated to respect the `maxNumberLength` constraint. The simplest fix appears to ensure that `_valueComplete()` or a similar method in the async path calls the appropriate validation methods (`resetInt()` or `resetFloat()`) already present in `ParserBase`, mirroring the behavior of the synchronous parsers.

**NOTE:** This research was performed in collaboration with [rohan-repos](https://github.com/rohan-repos)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>org.springframework/spring-webmvc</strong> <code>6.2.3</code> (maven)</summary>

<small><code>pkg:maven/org.springframework/spring-webmvc@6.2.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-22737?s=github&n=spring-webmvc&ns=org.springframework&t=maven&vr=%3E%3D6.2.0%2C%3C6.2.17"><img alt="medium 5.9: CVE--2026--22737" src="https://img.shields.io/badge/CVE--2026--22737-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')</i>

<table>
<tr><td>Affected range</td><td><code>>=6.2.0<br/><6.2.17</code></td></tr>
<tr><td>Fixed version</td><td><code>6.2.17</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Use of Java scripting engine enabled (e.g. JRuby, Jython) template views in Spring MVC and Spring WebFlux applications can result in disclosure of content from files outside the configured locations for script template views. This issue affects Spring Framework: from 7.0.0 through 7.0.5, from 6.2.0 through 6.2.16, from 6.1.0 through 6.1.25, from 5.3.0 through 5.3.46.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-41242?s=github&n=spring-webmvc&ns=org.springframework&t=maven&vr=%3E%3D6.2.0%2C%3C6.2.10"><img alt="medium 5.9: CVE--2025--41242" src="https://img.shields.io/badge/CVE--2025--41242-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')</i>

<table>
<tr><td>Affected range</td><td><code>>=6.2.0<br/><6.2.10</code></td></tr>
<tr><td>Fixed version</td><td><code>6.2.10</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.076%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Spring Framework MVC applications can be vulnerable to a “Path Traversal Vulnerability” when deployed on a non-compliant Servlet container.

An application can be vulnerable when all the following are true:

  *  the application is deployed as a WAR or with an embedded Servlet container
  *  the Servlet container  does not reject suspicious sequences https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.html#uri-path-canonicalization 
  *  the application  serves static resources https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-config/static-resources.html#page-title  with Spring resource handling


We have verified that applications deployed on Apache Tomcat or Eclipse Jetty are not vulnerable, as long as default security features are not disabled in the configuration. Because we cannot check exploits against all Servlet containers and configuration variants, we strongly recommend upgrading your application.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-22735?s=github&n=spring-webmvc&ns=org.springframework&t=maven&vr=%3E%3D6.2.0%2C%3C6.2.17"><img alt="low 2.6: CVE--2026--22735" src="https://img.shields.io/badge/CVE--2026--22735-lightgrey?label=low%202.6&labelColor=fce1a9"/></a> <i>Improper Locking</i>

<table>
<tr><td>Affected range</td><td><code>>=6.2.0<br/><6.2.17</code></td></tr>
<tr><td>Fixed version</td><td><code>6.2.17</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.6</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:U/C:N/I:L/A:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Spring MVC and WebFlux applications are vulnerable to stream corruption when using Server-Sent Events (SSE). This issue affects Spring Foundation: from 7.0.0 through 7.0.5, from 6.2.0 through 6.2.16, from 6.1.0 through 6.1.25, from 5.3.0 through 5.3.46.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>ch.qos.logback/logback-core</strong> <code>1.5.16</code> (maven)</summary>

<small><code>pkg:maven/ch.qos.logback/logback-core@1.5.16</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-11226?s=github&n=logback-core&ns=ch.qos.logback&t=maven&vr=%3E%3D1.4.0%2C%3C1.5.19"><img alt="medium 5.9: CVE--2025--11226" src="https://img.shields.io/badge/CVE--2025--11226-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>>=1.4.0<br/><1.5.19</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.19</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:L/AC:L/AT:P/PR:H/UI:P/VC:H/VI:L/VA:L/SC:H/SI:L/SA:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.058%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

QOS.CH logback-core versions up to 1.5.18 contain an ACE vulnerability in conditional configuration file processing in Java applications. This vulnerability allows an attacker to execute arbitrary code by compromising an existing logback configuration file or by injecting a malicious environment variable before program execution.

A successful attack requires the Janino library and Spring Framework to be present on the user's class path. Additionally, the attacker must have write access to a configuration file. Alternatively, the attacker could inject a malicious environment variable pointing to a malicious configuration file. In both cases, the attack requires existing privileges.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-1225?s=github&n=logback-core&ns=ch.qos.logback&t=maven&vr=%3C1.5.25"><img alt="low 1.8: CVE--2026--1225" src="https://img.shields.io/badge/CVE--2026--1225-lightgrey?label=low%201.8&labelColor=fce1a9"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code><1.5.25</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.25</code></td></tr>
<tr><td>CVSS Score</td><td><code>1.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:L/AC:H/AT:P/PR:H/UI:N/VC:L/VI:L/VA:L/SC:L/SI:L/SA:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ACE vulnerability in configuration file processing  by QOS.CH logback-core up to and including version 1.5.24 in Java applications, allows an attacker to instantiate classes already present on the class path by compromising an existing logback configuration file.

The instantiation of a potentially malicious Java class requires that said class is present on the user's class-path. In addition, the attacker must  have write access to a configuration file. However, after successful instantiation, the instance is very likely to be discarded with no further ado.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>org.apache.commons/commons-lang3</strong> <code>3.17.0</code> (maven)</summary>

<small><code>pkg:maven/org.apache.commons/commons-lang3@3.17.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-48924?s=github&n=commons-lang3&ns=org.apache.commons&t=maven&vr=%3E%3D3.0%2C%3C3.18.0"><img alt="medium 6.5: CVE--2025--48924" src="https://img.shields.io/badge/CVE--2025--48924-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> <i>Uncontrolled Recursion</i>

<table>
<tr><td>Affected range</td><td><code>>=3.0<br/><3.18.0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.18.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Uncontrolled Recursion vulnerability in Apache Commons Lang.

This issue affects Apache Commons Lang: Starting with commons-lang:commons-lang 2.0 to 2.6, and, from org.apache.commons:commons-lang3 3.0 before 3.18.0.

The methods ClassUtils.getClass(...) can throw StackOverflowError on very long inputs. Because an Error is usually not handled by applications and libraries, a StackOverflowError could cause an application to stop.

Users are recommended to upgrade to version 3.18.0, which fixes the issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>org.springframework/spring-web</strong> <code>6.2.3</code> (maven)</summary>

<small><code>pkg:maven/org.springframework/spring-web@6.2.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-41234?s=github&n=spring-web&ns=org.springframework&t=maven&vr=%3E%3D6.2.0%2C%3C6.2.8"><img alt="medium 6.5: CVE--2025--41234" src="https://img.shields.io/badge/CVE--2025--41234-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> <i>Improper Neutralization of CRLF Sequences in HTTP Headers ('HTTP Request/Response Splitting')</i>

<table>
<tr><td>Affected range</td><td><code>>=6.2.0<br/><6.2.8</code></td></tr>
<tr><td>Fixed version</td><td><code>6.2.8</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:C/C:H/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.109%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Description

In Spring Framework, versions 6.0.x as of 6.0.5, versions 6.1.x and 6.2.x, an application is vulnerable to a reflected file download (RFD) attack when it sets a “Content-Disposition” header with a non-ASCII charset, where the filename attribute is derived from user-supplied input.

Specifically, an application is vulnerable when all the following are true:

  -  The header is prepared with `org.springframework.http.ContentDisposition`.
  -  The filename is set via `ContentDisposition.Builder#filename(String, Charset)`.
  -  The value for the filename is derived from user-supplied input.
  -  The application does not sanitize the user-supplied input.
  -  The downloaded content of the response is injected with malicious commands by the attacker (see RFD paper reference for details).


An application is not vulnerable if any of the following is true:

  -  The application does not set a “Content-Disposition” response header.
  -  The header is not prepared with `org.springframework.http.ContentDisposition`.
  -  The filename is set via one of:  
     - `ContentDisposition.Builder#filename(String)`, or
     - `ContentDisposition.Builder#filename(String, ASCII)`
  -  The filename is not derived from user-supplied input.
  -  The filename is derived from user-supplied input but sanitized by the application.
  -  The attacker cannot inject malicious content in the downloaded content of the response.


### Affected Spring Products and VersionsSpring Framework

  -  6.2.0 - 6.2.7
  -  6.1.0 - 6.1.20
  -  6.0.5 - 6.0.28
  -  Older, unsupported versions are not affected


### Mitigation

Users of affected versions should upgrade to the corresponding fixed version.

| Affected version(s) | Fix version | Availability |
| - | - | - |
| 6.2.x | 6.2.8 | OSS |
| 6.1.x | 6.1.21 | OSS |
| 6.0.x | 6.0.29 | [Commercial](https://enterprise.spring.io/) |

No further mitigation steps are necessary.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>org.springframework/spring-context</strong> <code>6.2.3</code> (maven)</summary>

<small><code>pkg:maven/org.springframework/spring-context@6.2.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-22233?s=github&n=spring-context&ns=org.springframework&t=maven&vr=%3E%3D6.2.0%2C%3C%3D6.2.6"><img alt="low 3.1: CVE--2025--22233" src="https://img.shields.io/badge/CVE--2025--22233-lightgrey?label=low%203.1&labelColor=fce1a9"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>>=6.2.0<br/><=6.2.6</code></td></tr>
<tr><td>Fixed version</td><td><code>6.2.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>3.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.083%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

CVE-2024-38820 ensured Locale-independent, lowercase conversion for both the configured disallowedFields patterns and for request parameter names. However, there are still cases where it is possible to bypass the disallowedFields checks.

Affected Spring Products and Versions

Spring Framework:
  *  6.2.0 - 6.2.6

  *  6.1.0 - 6.1.19

  *  6.0.0 - 6.0.27

  *  5.3.0 - 5.3.42
  *  Older, unsupported versions are also affected



Mitigation

Users of affected versions should upgrade to the corresponding fixed version.

| Affected version(s) | Fix Version | Availability |
| - | - | - |
| 6.2.x |  6.2.7 | OSS |
| 6.1.x |  6.1.20 | OSS |
| 6.0.x |  6.0.28 |  Commercial https://enterprise.spring.io/ |
| 5.3.x |  5.3.43 | Commercial https://enterprise.spring.io/  |

No further mitigation steps are necessary.


Generally, we recommend using a dedicated model object with properties only for data binding, or using constructor binding since constructor arguments explicitly declare what to bind together with turning off setter binding through the declarativeBinding flag. See the Model Design section in the reference documentation.

For setting binding, prefer the use of allowedFields (an explicit list) over disallowedFields.

Credit

This issue was responsibly reported by the TERASOLUNA Framework Development Team from NTT DATA Group Corporation.

</blockquote>
</details>
</details></td></tr>
</table>

