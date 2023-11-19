// Sample data
const email = 'john.doe@example.com';
const phone = '+1 (555) 123-4567';

// Regular expressions for pattern matching
const emailRegex = /^([\w\.-]+)@([\w-]+)\.([\w]{2,})$/;
const phoneRegex = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/;

// Destructuring and pattern matching
const [, username, domain, tld] = email.match(emailRegex);
const [, countryCode, areaCode, firstPart, secondPart] = phone.match(phoneRegex);

// Output extracted parts
console.log('Email:', email);
console.log('Username:', username);
console.log('Domain:', domain);
console.log('TLD:', tld);
console.log('Phone:', phone);
console.log('Country Code:', countryCode);
console.log('Area Code:', areaCode);
console.log('First Part:', firstPart);
console.log('Second Part:', secondPart);



