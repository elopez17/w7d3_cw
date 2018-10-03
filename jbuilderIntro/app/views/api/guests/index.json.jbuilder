json.array! @guests do |curr_guest|
  if curr_guest.age >= 40 && curr_guest.age <= 50
    json.partial! 'api/guests/guest', guest: curr_guest
  end
end
