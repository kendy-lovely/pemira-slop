import React from "react";

const Pemira = ({ height }) => <img src="/pemira.svg" style={{ display: "inline-block", width: "auto", height: height, translate: "-15px 0" }}></img>;

const LinkButton = ({ children, href }) => (
    <a href={href}>
	<div style={{
	    display: "grid",
	    width: "20cqw",
	    height: "7.5cqw",
	    borderRadius: "10cqw",
	    fontSize: "2cqw",
	    backgroundColor: "#503932",
	    color: "#FFFFFF",
	    placeItems: "center"
	}}>
	  {children}
	</div>
    </a>  
);

export default () => (
    <div style={{
	display: "grid",
	width: "100lvw",
	position: "absolute",
	top: 0,
	left: 0,
	backgroundColor: "#EFEBE4"
    }}>
	<div style={{
	    display: "grid",
	    gridTemplateRows: "auto",
	    gridTemplateColumns: "1fr 2fr",
	    placeItems: "center",
	    columnGap: "30cqw",
	    width: "100%",
	    fontSize: "1cqw",
	    backgroundColor: "#103F5D",
	    color: "#FFFFFF"
	}}>
	    <Pemira height="5cap"/>
	    <div style={{ display: "flex", flexDirection: "row", gap: "2cqw"}}>
		<a>HOME</a>
		<a>PROFIL CALON</a>
		<a>PERATURAN DAN PELANGGARAN</a>
	    </div>
	</div>
	<div style={{
	    display: "grid",
	    gridTemplateRows: "auto",
	    gridTemplateColumns: "auto",
	    width: "100%",
	    height: "60cqw",
	    overflow: "hidden",
	    position: "relative",
	    background: "transparent"
	}}>
	    <img src="/home1.jpg" style={{ position: "absolute", inset: 0, width: "100%", height: "auto", objectFit: "cover" }} />
	    <div style={{
		position: "absolute",
		inset: 0,
		pointerEvents: "none",
		background: "color-mix(in srgb, #103F5D 75%, transparent)",
	    }} />
	    <img src="/home4.svg" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto" }} />
	    <img src="/home5.png" style={{ position: "absolute", inset: 0, width: "50%", translate: "50% 50%" }} />
	</div>
	<div style={{
	    display: "grid",
	    gridTemplateRows: "auto",
	    gridTemplateColumns: "4fr 3fr",
	    alignItems: "stretch",
	    justifyContent: "stretch",
	    height: "60cqw",
	    width: "100dvw"
	}}>
	    <div style={{
		display: "flex",
		gridArea: "1 / 1 / 2 / 2",
		flexDirection: "column",
		paddingLeft: "5.75cqw",
		justifyContent: "center",
		fontSize: "2cqw"
	    }}>
		<h1>ABOUT<br /><Pemira height="2.5cap"/></h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
	    </div>
	    <div style={{
		overflow: "hidden",
		position: "relative",
		gridArea: "1 / 2 / 2 / 3"
	    }}>
		<img src="/home2.jpg" style={{ float: "right", height: "100%", aspectRatio: "1" }} />
		<div style={{
		    position: "absolute",
		    inset: 0,
		    pointerEvents: "none",
		    background: "linear-gradient(to right, #EFEBE4, transparent 90%), linear-gradient(to top, #EFEBE4, transparent 90%)",
		}} />
	    </div>
	</div>
	<div style={{
	    display: "grid",
	    gridTemplateRows: "1fr 1fr",
	    gridTemplateColumns: "1fr 1fr",
	    alignItems: "stretch",
	    justifyContent: "stretch",
	    height: "60cqw",
	    width: "100dvw"
	}}>
	    <div style={{
		display: "flex",
		gridArea: "1 / 1 / 2 / 2",
		flexDirection: "column",
		paddingLeft: "5.75cqw",
		justifyContent: "center",
		fontSize: "2cqw"
	    }}>
		<h1>TIMELINE<br />PEMIRA IKM FTUI</h1>
	    </div>
	    <div style={{
		overflow: "hidden",
		position: "relative",
		gridArea: " 2 / 1 / 3 / 3"
	    }}>
		<img src="/home3.svg" style={{ float: "center", width: "100%" }} />
	    </div>
	</div>
	<div style={{
	    display: "grid",
	    gridTemplateRows: "1fr 1fr",
	    gridTemplateColumns: "auto",
	    alignItems: "stretch",
	    justifyContent: "stretch",
	    height: "60cqw",
	    width: "100dvw"
	}}>
	    <div style={{
		display: "flex",
		gridArea: "1 / 1 / 2 / 2",
		flexDirection: "column",
		gap: "2.5cqw",
		paddingLeft: "5.75cqw",
		paddingRight: "17.25cqw",
		justifyContent: "center",
		fontSize: "2cqw"
	    }}>
		<contain>
		    <h1>PROFIL CALON</h1>
		    <span>Kenali calon pemimpin dan perwakilan mahasiswa FTUI melalui informasi visi, misi, serta profil masing-masing calon</span>
		</contain>
		<LinkButton href="/">
		    <b>Klik disini</b>
		</LinkButton>
	    </div>
	    <div style={{
		display: "flex",
		gridArea: "2 / 1 / 3 / 2",
		flexDirection: "column",
		gap: "2.5cqw",
		paddingLeft: "5.75cqw",
		paddingRight: "17.25cqw",
		paddingBottom: "10cqw",
		justifyContent: "center",
		fontSize: "2cqw"
	    }}>
		<contain>
		    <h1>PERATURAN DAN PELANGGARAN</h1>
		    <span>Pelajari peraturan, tata tertib, serta ketentuan pelanggaran untuk menjaga proses Pemira yang jujur, adil, dan transparan.</span>
		</contain>
		<a>
		    <LinkButton href="/">
			<b>Klik disini</b>
		    </LinkButton>
		</a>
	    </div>
	</div>
    </div>
);
