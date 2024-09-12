var vendorIpAddress ="60.60.0.2"; //put here the default selected address

//list here all node mcu address for multi vendo setup
var multiVendoAddresses = [
	{
		vendoIp: "60.60.0.2", //change accordingly to your vendo ip
		interfaceName: "RCTECH WIFI4.3" // hotspot interface name preser
	},

];

for(var i=0;i<multiVendoAddresses.length;i++){
			var currentInterfaceName = interfaceName;
			if(multiVendoAddresses[i].interfaceName == currentInterfaceName){
				vendorIpAddress = multiVendoAddresses[i].vendoIp;
			}
}