import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Homepage from "./Homepage";
import CreateDeck from "./Deck-components/CreateDeck";
import ViewDeck from "./Deck-components/ViewDeck";
import EditDeck from "./Deck-components/EditDeck";
import CardList from "./Card-components/CardList";
import CreateCard from "./Card-components/CreateCard";
import EditCard from "./Card-components/EditCard";

export default function Routing() {
  const [deck, setDeck] = useState({ cards: [] });

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck deck={deck} setDeck={setDeck} />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <CardList />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}
