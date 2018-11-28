import Link from 'next/link';

const Nav = () => (
	<NavStyles>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/link1">
			<a>Link 1</a>
		</Link>
		<Link href="/link2">
			<a>Link 1</a>
		</Link>
		<Link href="/link3">
			<a>Link 1</a>
		</Link>
	</NavStyles>
);

export default Nav;
