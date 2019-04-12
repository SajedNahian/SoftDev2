UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LOWERCASE = UPPERCASE.lower()
DIGITS = [str(i) for i in range(10)]
SPECIAL = "*.!?&#,;:-_"

def threshold_checker(password):

    upper = [char for char in password if char in UPPERCASE]
    lower = [char for char in password if char in LOWERCASE]
    numbers = [char for char in password if char in DIGITS]
    specials = [char for char in password if char in SPECIAL]

    return len(upper) > 1 and len(lower) > 1 and len(numbers) > 1

def strength_checker(password):
    strength = 1

    if threshold_checker(password):
        p_length = len(password)
        if p_length > 10:
            strength += 4
        else:
            strength += p_length - 4

        numbers = [char for char in password if char in DIGITS]
        upper = [char for char in password if char in UPPERCASE]
        lower = [char for char in password if char in LOWERCASE]
        specials = [char for char in password if char in SPECIAL]
        if len(specials) > 0:
            strength += 1
        if len(specials) > 2:
            strength += 1
        if len(numbers) > 2:
            strength += 1
        if len(upper) > 2:
            strength +=1
        if len(lower) > 2:
            strength +=1

    return strength
