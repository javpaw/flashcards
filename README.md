# Flashcards Django Project #
## Prerequisites ##

- python >= 2.5
- pip
- virtualenv/wrapper (optional)

## Installation ##
### Creating the environment ###
Create a virtual python environment for the project.
If you're not using virtualenv or virtualenvwrapper you may skip this step.

#### For virtualenvwrapper ####
```bash
mkvirtualenv --no-site-packages flashcards-env
```

#### For virtualenv ####
```bash
virtualenv --no-site-packages flashcards-env
cd flashcards-env
source bin/activate
```

### Clone the code ###
Obtain the url to your git repository.

```bash
git clone <URL_TO_GIT_RESPOSITORY> flashcards
```

### Install requirements ###
```bash
cd flashcards
pip install -r requirements.txt
```

### Configure project ###
```bash
cp flashcards/__local_settings.py flashcards/local_settings.py
vi flashcards/local_settings.py
```

### Sync database ###
```bash
python manage.py syncdb
```

## Running ##
```bash
python manage.py runserver
```

Open browser to http://127.0.0.1:8000
