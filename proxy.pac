function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "adc-ad-assets.adtilt.com") || dnsDomainIs(host, "c4d-cdn.adcolony.com") || dnsDomainIs(host, "code.jquery.com") || dnsDomainIs(host, "content.tapjoy.com") || dnsDomainIs(host, "networksdk.ssacdn.com") || dnsDomainIs(host, "s.mzstatic.com") || dnsDomainIs(host, ".apple.com") || dnsDomainIs(host, ".icloud.com") || dnsDomainIs(host, ".cdn-apple.com"))
		return "DIRECT";
	return "PROXY 192.168.0.105:8082";
}
