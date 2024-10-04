const dns = require('dns');
function resolveDomain(domain) {
    dns.resolve4(domain, (err, addresses) => {
        if (err) {
            console.error(`Error resolving ${domain}:`, err.message);
            return;
        }
        console.log(`IP addresses for ${domain}: ${addresses.join(', ')}`);
    });
}
function reverseLookup(ipAddress) {
    dns.reverse(ipAddress, (err, hostnames) => {
        if (err) {
            console.error(`Error performing reverse lookup for ${ipAddress}:`, err.message);
            return;
        }
        console.log(`Hostnames for ${ipAddress}: ${hostnames.join(', ')}`);
    });
}

function main() {
    const domain = 'example.com';
    const ipAddress = '93.184.216.34';

    console.log(`Resolving domain: ${domain}`);
    resolveDomain(domain);

    console.log(`\nPerforming reverse lookup for IP: ${ipAddress}`);
    reverseLookup(ipAddress);
}
main();