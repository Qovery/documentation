require_relative "platform"

class Installation
  attr_reader :interfaces,
    :operating_systems,
    :package_managers,
    :platforms,
    :strategies

  def initialize(hash)
    @interfaces = hash.fetch("interfaces").to_struct_with_name
    @operating_systems = hash.fetch("operating_systems").to_struct_with_name
    @package_managers = hash.fetch("package_managers").to_struct_with_name
    @platforms = hash.fetch("platforms").to_struct_with_name(constructor: Platform)
    @strategies = hash.fetch("strategies").to_struct_with_name
  end

  def interfaces_list
    @interfaces_list ||= interfaces.to_h.values.sort_by(&:title)
  end

  def operating_systems_list
    @operating_systems_list ||= operating_systems.to_h.values.sort_by(&:title)
  end

  def package_managers_list
    @package_managers_list ||= package_managers.to_h.values.sort_by(&:title)
  end

  def platforms_list
    @platforms_list ||= platforms.to_h.values.sort_by(&:title)
  end

  def strategies_list
    @strategies_list ||= strategies.to_h.values.sort_by(&:title)
  end

  def to_h
    {
      operating_systems: operating_systems,
      package_managers: package_managers,
      platforms: platforms.deep_to_h
    }
  end
end
