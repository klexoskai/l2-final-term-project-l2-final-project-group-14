/* Container for event cards */
.events-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
}

/* Individual event card styling */
.event-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  width: calc(33.333% - 20px);
}

/* Event card image */
.event-card img {
  width: 100%;
  height: auto;
  display: block;
}

/* Event info section */
.event-info {
  padding: 15px;
}

/* Event title */
.event-info h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

/* Event location and price */
.event-info p {
  font-size: 1em;
  margin-bottom: 5px;
  color: #666;
}

/* Event price for free events */
.event-info p.free {
  color: #2ecc71;
}

/* Categories section */
.categories-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

/* Individual category */
.category {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 100px;
  background: #f4f4f4;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
}

/* Category image and label */
.category img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.category label {
  font-size: 1em;
}

/* Last category margin fix */
.category:last-child {
  margin-right: 0;
}