# **MoodFork**  
### **Why do you need Gf/Bf when we are here to cheer you Up**

---

## **🌟 Problem Statement**  
In our fast-paced lives, mood swings and stress are common experiences. People often turn to food as a source of comfort, but what if food could actively enhance emotional well-being?  

Certain flavors are scientifically known to support emotional states—relaxing, energizing, or uplifting. Unfortunately, many lack the time, knowledge, or resources to identify recipes that can genuinely influence their mood. 

**MoodFork** bridges this gap, offering a unique platform that connects your emotional state to recipes designed to enhance your well-being.

---

## **💡 Proposed Solution**  
MoodFork introduces a mood-based recipe recommendation tool. Users can:  
1. Select their **current mood** or the mood they **want to achieve**.  
2. Get recipes tailored to these emotional goals using **FlavorDB API**, which maps flavors and molecules to their mood-altering properties.  

### **Key Examples**
- **Vanilla or Chamomile**: Calming and soothing.  

MoodFork creates a mindful, flavor-driven culinary experience to help users balance their emotions through food.  

---

## **⚙️ Features**
- Mood detection using AI (via **FER Library**) and user input.  
- Dynamic recipe recommendations based on the **FlavorDB API**.  
- Integration of **OpenCV** for mood analysis.  

---

## **🚀 How to Run**  
### Step 1: Clone the Repository
```bash
git clone https://github.com/Abhay-Kushwaha/MoodFork
cd MoodFork
```

### Step 2: Activate Virtual Environment
On Linux/Mac:
```bash
python -m venv venv
source venv/bin/activate
```
On Windows:
```bash
python -m venv venv
venv\Scripts\activate
```

### Step 3: Install Required Libraries
Install all the libraries of python by using following commands:  
```bash
pip install -r requirements.txt
```

### Step 4: Start the Application
Use the command below in your terminal (preferably in **VS Code**):  
```bash
python app.py
```

### Step 3: Access the Application
Open your browser and navigate to:  
**http://127.0.0.1:5000**

---

## **📂 Project Structure**
```
MoodFork/
│
├── __pycache__/          # Compiled Python bytecode (automatically generated, can be ignored)
├── scss/                 # SCSS (Sassy CSS) files for styling (optional)
├── static/               # Static assets like CSS, JavaScript, and images
├── templates/            # HTML templates for the Flask application
├── venv/                 # Virtual Environment
├── app.py                # Main Flask application
├── emotion_detector.py   # Python code to detect the facial emotions
├── emotions_food.json    # JSON file mapping emotions to foods or ingredients
├── README.md             # Project documentation
└── requirements.txt      # List of required libraries
```

---

## **🎨 UI Highlights**
- **Simple Mood Selection**: Users can easily detect their emotional state just in one click (need access to camera).  
- **AI-Powered Detection**: The app can analyze facial expressions to suggest recipes accordingly to enhance the mood.  
- **Recipe Recommendations**: Tailored suggestions based on mood and flavor science.  
- **General Recommendations**: Get pre-defined suggestions of different flavors with recipe.  

---

## **💻 Technologies Used**
- **Python** (Flask Framework)  
- **OpenCV** (Mood Detection)  
- **FER Library** (Facial Expression Analysis)  
- **FlavorDB API** (Mood-Flavor Mapping)  

---

## **📌 Future Enhancements**
- Advanced **AI-based mood prediction** using facial expressions and text sentiment.  
- More advanced database with flavour as well as Ingredients mapping.  
- User preferences and history-based recommendations.  

---

## **📧 Contact**
Feel free to reach out if you have questions or suggestions:  
- **Email**: [abhay369kumar@gmail.com](mailto:abhay369kumar@gmail.com)  
- **LinkedIn**: [Abhay Kushwaha](https://www.linkedin.com/in/abhay-k-5a0902278/)

---