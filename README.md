# mata {data + maps}
## Website that allows police/trusted officials to report crimes/accidents in the area of cupertino (works globally though)
#### Languages used: HTML, CSS, JavaScript
#### APIs used: Google Maps JS API, Google Maps Geocoding API, Google Firebase API

Google Maps JS API - used for displaying the map and accessing the map's data

Google Maps Geocoding API - used for converting the address text input into coordinates usable by the JS API (geocoding)

Google Firebase API - used as data base for police logs of crimes/accidents, works in realtime, helped in displaying past logs, keeps a record of past logs effeciently on the cloud.

#### What we did
- Created an interactive website containing a toggleable map interface and another interface below for the police to input any crimes/accidents, specifying the location, type of incident, a description of the event and the severity of the event. All markers indicate some sort of logged event, this is all stored in the database and keeps a log of data for display. The markers, when clicked, display the details of the event.

#### Stuff to do

- User Authentication (OAuth) to ensure that only trusted individuals can edit the data and others can only view the data
- Keep track of time in program, allowing for only recent entries to be shown and old ones to be deleted from the database
- Cluster data when zoomed out enough, allowing for cleaner data visualization (heatmap from api or markerclusters)
- Add preset descriptions/filler data for quick input
- Publish accessible website


#### Things learned
- Collaboration through Github
- Working with various Google API's
- HTML/CSS/JavaScript (whole group had no experience with any web development prior to today) 
  -LOTS of syntax learned (the hard way...)
- Server side programming through firebase
 -Was a pain at first, but got used to it
- Working with JSON files
- Time management + task splitting
- Staying awake on pure sugar

### All in all, this was a great learning experience for the whole group, as it was mostly everyone's first hackathon



