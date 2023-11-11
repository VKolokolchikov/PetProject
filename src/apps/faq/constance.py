class FAQTypes:
    QUESTION = 'question'
    REASON = 'reason'

    TITLES = {
        QUESTION: 'Секция вопросов',
        REASON: 'Секция причины',
    }

    CHOICES = (
        (QUESTION, TITLES[QUESTION],),
        (REASON, TITLES[REASON],),
    )
