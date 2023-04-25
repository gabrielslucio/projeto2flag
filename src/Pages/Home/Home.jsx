import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ChampionList from "../../Container/ChampionList/ChampionList";

function Home() {
    return (
        <>
        <Navbar />
        <Header />
        <ChampionList />
        <Footer />
        </>
    );
}

export default Home;