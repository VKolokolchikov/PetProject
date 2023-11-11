class StatusComment:
    UNPROCESSED = 1
    IN_WORK = 2
    CLOSED = 3

    TITLES = {
        UNPROCESSED: 'Необработанная',
        IN_WORK: 'В работе',
        CLOSED: 'Закрытая',
    }

    CHOICES = (
        (UNPROCESSED, TITLES[UNPROCESSED]),
        (IN_WORK, TITLES[IN_WORK]),
        (CLOSED, TITLES[CLOSED]),
    )


class StaffRequestType:
    CALL_BACK = 'callback'
    CALL_MASTER = 'call_master'

    TITLES = {
        CALL_BACK: 'Заявка на звонок',
        CALL_MASTER: 'Заявка на вызов мастера',
    }

    CHOICE = (
        (CALL_BACK, TITLES[CALL_BACK]),
        (CALL_MASTER, TITLES[CALL_MASTER])
    )
